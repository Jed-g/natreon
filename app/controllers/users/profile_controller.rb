# frozen_string_literal: true

module Users
    class ProfileController < ApplicationController
        def user_profile
            @user = current_user

            render json: @user
        end
    end
end