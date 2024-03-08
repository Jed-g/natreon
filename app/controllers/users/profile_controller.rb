# frozen_string_literal: true

module Users
    class ProfileController < ApplicationController
        def user_profile
            @user = current_user

            render json: @user
        end

        def update_user_profile
            @user = current_user

            if @user.update(user_params)
                render json: @user
            else
                render json: @user.errors
            end
        end

        private

        def user_params
            params.require(:user).permit(:nickname, :email, :description,:id, :user_type, :created_at, :updated_at, :jti)
        end
    end
end