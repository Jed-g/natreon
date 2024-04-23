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
FactoryBot.define do
  factory :poi do
    name { "MyString" }
    description { "MyText" }
    location { "MyString" }
    features { "MyText" }
    likes { 1 }
    latitude { 1.5 }
    longitude { 1.5 }
  end
end
