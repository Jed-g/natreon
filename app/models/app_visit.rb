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
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  session_id         :string           not null
#
class AppVisit < ApplicationRecord
  self.table_name = "app_visits"

  # Uncomment once deployed and app_visits table data cleared
  # validate :email_exists_in_user

  # private

  # def email_exists_in_user
  #   errors.add(:email, "is not associated with any user") unless User.exists?(email: email)
  # end
end
