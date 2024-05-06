# frozen_string_literal: true

# == Schema Information
#
# Table name: app_visits
#
#  id                 :bigint           not null, primary key
#  country            :string           default("DEFAULT"), not null
#  email              :string           default("DEFAULT"), not null
#  ip_address         :string           not null
#  latitude           :decimal(, )      default(0.0), not null
#  longitude          :decimal(, )      default(0.0), not null
#  time_spent_seconds :integer          default(0), not null
#  viewed_pois        :bigint           default([]), not null, is an Array
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  session_id         :string           not null
#
class AppVisit < ApplicationRecord
  self.table_name = "app_visits"

  validate :viewed_pois_exist

  private

  def viewed_pois_exist
    viewed_pois.each do |poi_id|
      errors.add(:viewed_pois, "contains invalid poi_id: #{poi_id}") unless Poi.exists?(id: poi_id)
    end
  end
end
