# == Schema Information
#
# Table name: pois
#
#  id          :bigint           not null, primary key
#  description :text             default(""), not null
#  features    :string           default([]), not null, is an Array
#  latitude    :float            not null
#  likes       :integer          default(0), not null
#  location    :string           not null
#  longitude   :float            not null
#  name        :string           not null
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
