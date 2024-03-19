# == Schema Information
#
# Table name: pois
#
#  id          :bigint           not null, primary key
#  description :text
#  features    :text
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
end
