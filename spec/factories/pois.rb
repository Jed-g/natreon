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


FEATURES = Poi::FEATURES

FactoryBot.define do
  factory :poi do
    latitude {54.978252} 
    longitude {-1.617439}
    name {'Newcastle upon Tyne'}
    location {'newcastle'}
    description {'dummy desc'}
    features {FEATURES.sample(rand(1..5))}
    likes {0}

    # name { "MyString" }
    # description { "MyText" }
    # location { "MyString" }
    # features { ["Natural Landmark"] }
    # likes { 1 }
    # latitude { 1.5 }
    # longitude { 1.5 }
  end
end
