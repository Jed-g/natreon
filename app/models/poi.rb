# == Schema Information
#
# Table name: pois
#
#  id          :bigint           not null, primary key
#  description :text
#  features    :string           default([]), is an Array
#  latitude    :float
#  likes       :integer
#  location    :string
#  longitude   :float
#  name        :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Poi < ApplicationRecord
    self.table_name = 'pois'
    validates :latitude, numericality: { greater_than_or_equal_to: -90, less_than_or_equal_to: 90 }
    validates :longitude, numericality: { greater_than_or_equal_to: -180, less_than_or_equal_to: 180 }
    validates :name, length: { minimum: 3 }, format: { with: /\A[a-z0-9 ]+\z/i }
end
