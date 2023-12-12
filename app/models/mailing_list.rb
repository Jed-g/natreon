# frozen_string_literal: true

# == Schema Information
#
# Table name: mailing_list
#
#  id         :bigint           not null, primary key
#  email      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class MailingList < ApplicationRecord
  self.table_name = "mailing_list"
  validates :email, presence: true, uniqueness: true, format: { with: /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i }

  def self.record_email(email)
    create(email: email)
  end
end
