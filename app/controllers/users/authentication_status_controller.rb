class Users::AuthenticationStatusController < ApplicationController
  def index
    user_type = is_authenticated

    if is_authenticated
      render json: {userType: user_type}
    else
      render json: {userType: "Not Authenticated"}, status: :unauthorized
    end
  end
end
