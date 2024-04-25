# == Schema Information
#
# Table name: pois
#
#  id          :bigint           not null, primary key
#  description :text
#  features    :string           default([]), is an Array
#  latitude    :float
#  likes       :integer          default(0)
#  location    :string
#  longitude   :float
#  name        :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Poi < ApplicationRecord
  self.table_name = 'pois'

  FEATURES = [
    "Natural Landmark",
    "Scenic Viewpoint",
    "Statue",
    "Historical Site",
    "Cultural Attraction",
    "Recreational Area",
    "Educational Institution",
    "Shopping District",
    "Food and Drink",
    "Entertainment Venue",
    "Water Fountain"
  ].freeze

  validates :latitude, numericality: {greater_than_or_equal_to: -90, less_than_or_equal_to: 90}
  validates :longitude, numericality: {greater_than_or_equal_to: -180, less_than_or_equal_to: 180}
  validates :name, length: {minimum: 3}, format: {with: /\A[a-z0-9 ]+\z/i}

  has_many :favourites, foreign_key: :poi_id
  has_many :favourite_users, through: :favourites, source: :user

  validates_each :features do |record, attr, value|
    value.each do |feature|
      record.errors.add(attr, 'contains invalid feature') unless FEATURES.include?(feature)
    end
  end

  has_many_attached :poi_pictures

  validates :poi_pictures, content_type: ['image/png', 'image/jpg', 'image/jpeg']

end
