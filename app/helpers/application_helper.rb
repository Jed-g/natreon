module ApplicationHelper
    def is_authenticated
        if !cookies[:access_token].present?
            return false
        end

        jwt_payload = JWT.decode(cookies[:access_token], Rails.application.secrets.devise_jwt_secret_key!).first
        current_user = User.find(jwt_payload['sub'])

        if !current_user
            return false
        end

        return true
    end

    def get_current_user
        if !cookies[:access_token].present?
            return false
        end

        jwt_payload = JWT.decode(cookies[:access_token], Rails.application.secrets.devise_jwt_secret_key!).first
        current_user = User.find(jwt_payload['sub'])

        if !current_user
            return false
        end

        return current_user
    end
end
