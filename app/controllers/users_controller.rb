# frozen_string_literal: true

class UsersController < ApplicationController
  def index
    users = User.select(:id, :nickname)
    render json: users
  end
end
