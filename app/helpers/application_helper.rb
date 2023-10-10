module ApplicationHelper
    def is_authenticated
        if !request.headers['Authorization'].present?
            return false
        end

        jwt_payload = JWT.decode(request.headers['Authorization'].split(' ').last, Rails.application.credentials.devise_jwt_secret_key!).first
        current_user = User.find(jwt_payload['sub'])

        if !current_user
            return false
        end

        return true
    end
end
