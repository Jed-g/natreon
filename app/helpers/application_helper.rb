module ApplicationHelper
  def is_authenticated
    user = get_current_user

    return false unless user

    user.user_type
  end

  def get_current_user
    return false unless cookies[:access_token].present?

    jwt_payload = JWT.decode(cookies[:access_token], Rails.application.secrets.devise_jwt_secret_key!).first
    current_user = User.find(jwt_payload["sub"])

    return false unless current_user

    current_user
  end

  def is_admin
    user = get_current_user

    return false if !user || user.user_type != "admin"

    true
  end
end
