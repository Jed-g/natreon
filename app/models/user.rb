# frozen_string_literal: true

# == Schema Information
#
# Table name: users
#
#  id                     :bigint           not null, primary key
#  deactivated            :boolean          default(FALSE)
#  description            :string           not null
#  email                  :string           default(""), not null
#  encrypted_password     :string           default(""), not null
#  jti                    :string           not null
#  nickname               :string           not null
#  remember_created_at    :datetime
#  reset_password_sent_at :datetime
#  reset_password_token   :string
#  user_type              :integer          default("customer"), not null
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#
# Indexes
#
#  index_users_on_email                 (email) UNIQUE
#  index_users_on_jti                   (jti) UNIQUE
#  index_users_on_reset_password_token  (reset_password_token) UNIQUE
#
class User < ApplicationRecord
  include Devise::JWT::RevocationStrategies::JTIMatcher
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :jwt_cookie_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable, :jwt_authenticatable, jwt_revocation_strategy: self

  enum user_type: {customer: 0, admin: 1, reporter: 2}
  validates :user_type, presence: true, inclusion: {in: User.user_types.keys}

  EMAIL_REGEX = /\A[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}\z/
  validates :email, presence: true, format: {with: EMAIL_REGEX}

  validates :nickname, length: { minimum: 3 }

  has_one_attached :profile_picture

  validates :profile_picture, content_type: ['image/png', 'image/jpg', 'image/jpeg']

  has_many :favourites, foreign_key: :user_id
  has_many :favourite_pois, through: :favourites, source: :poi

  def active_for_authentication?
    super && !deactivated
  end
end
