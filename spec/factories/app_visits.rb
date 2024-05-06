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
FactoryBot.define do
  factory :app_visit do
    # id { 1 }
    # country { 'United Kingdom' }
    ip_address { "192.168.1.1" }
    # latitude {23}
    # longitude {56}
    created_at { "23/06/2013" }
    updated_at { "24/06/2013" }
    session_id { 23 }
  end
end
