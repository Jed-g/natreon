# frozen_string_literal: true

module Users
    class ProfileController < ApplicationController
        def show
            @user = current_user

            render json: @user.as_json.merge({profile_picture: url_for(@user.profile_picture)})
        end

        def update_user_profile
            @user = current_user

            if @user.update(user_params)
                render json: @user
            else
                render json: @user.errors
            end
        end

        def update_profile_picture
            @user = current_user
            @user.profile_picture.attach(params[:profile_picture])

            if @user.save
                render json: @user
            else
                render json: @user.errors
            end
        end

        private

        def user_params
            params.require(:user).permit(:nickname, :email, :description,:id, :user_type, :profile_picture, :created_at, :updated_at, :jti)
        end

    end
end