# frozen_string_literal: true

module Admin
  class StatsController < ApplicationController
    before_action :authorize_admin_controllers

    def globe
      unique = LandingPageVisit.all.group_by(&:session_id).map {|_, visits|
                 visits.first
               }.map {|visit| [visit.longitude, visit.latitude, 1] }
      all = LandingPageVisit.pluck(:longitude, :latitude).map {|coordinates| coordinates << 1 }
      return render json: {all: all, unique: unique}
    end

    def all_visits
      unique = LandingPageVisit.all.group_by(&:session_id).map {|_, visits|
                 visits.first
               }.map {|visit| [visit.country, visit.created_at, visit.time_spent_seconds] }
      all = LandingPageVisit.pluck(:country, :created_at, :time_spent_seconds)
      unique.sort_by! {|visit| visit[1] }
      all.sort_by! {|visit| visit[1] }

      # Remove in production, 3D plot has tooltip not showing bug with very small amounts of data
      unique = unique.flat_map do |element|
        10.times.map { [element[0], (rand(1..15)).days.ago, element[2] * rand(1..15),] }
      end

      all = all.flat_map do |element|
        10.times.map { [element[0], (rand(1..15)).days.ago, element[2] * rand(1..15),] }
      end

      # header = ['Country', 'Time spent (s)', 'Date']
      # unique.unshift(header)
      # all.unshift(header)

      return render json: {all: all, unique: unique}
    end
  end
end
