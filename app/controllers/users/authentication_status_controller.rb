class Users::AuthenticationStatusController < ApplicationController
  include ApplicationHelper

  def index
    user_type = is_authenticated

    if !is_authenticated
      render json: { userType: 'Not Authenticated' }, status: 401
    else
      render json: { userType: user_type }
    end
  end
end
