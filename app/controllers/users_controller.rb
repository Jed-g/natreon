# frozen_string_literal: true

class UsersController < ApplicationController
  before_action :authenticate_user!

  # this is to return all users except current user, friends and requested friends
  # TODO: should almost certainly rename this
  def index
    friends_ids = current_user.friends.pluck(:id)
    requested_friends_ids = current_user.friend_requests.pluck(:friend_id)
    exclude_ids = friends_ids + requested_friends_ids + [current_user.id]
    users = User.where.not(id: exclude_ids).select(:id, :nickname)
    render json: users
  end

  def show
    render json: current_user
  end
end
