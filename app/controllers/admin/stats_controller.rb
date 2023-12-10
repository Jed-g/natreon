# frozen_string_literal: true

module Admin
  class StatsController < ApplicationController
    before_action :authorize_admin_controllers
    
    def globe
      unique = LandingPageVisit.all.group_by(&:session_id).map { |_, visits| visits.first }.map { |visit| [visit.longitude, visit.latitude, 1] }
      all = LandingPageVisit.pluck(:longitude, :latitude).map { |coordinates| coordinates << 1 }
      return render json: {all: all, unique: unique}
    end
  end
end
