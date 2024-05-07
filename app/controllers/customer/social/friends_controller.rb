# frozen_string_literal: true

module Customer
  module Social
    class FriendsController < ApplicationController
      before_action :authorize_customer_controllers
      # before_action :authenticate_user!
      before_action :set_friend, only: :destroy

      def index
        @friends = current_user.friends.where.not(id: current_user.blocked_users)
        render json: @friends
      end

      def destroy
        current_user.remove_friend(@friend, current_user)
        head :no_content
      end

      private

      def set_friend
        @friend = current_user.friends.find(params[:id])
      end
    end
  end
end
