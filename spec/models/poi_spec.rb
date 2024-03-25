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
require 'rails_helper'

RSpec.describe Poi, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
