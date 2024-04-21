# frozen_string_literal: true

module Customer
  class FavouritePoisController < ApplicationController
    before_action :authorize_customer_controllers, :get_user

    def all
      render json: @user.favourite_pois
    end

    def single_poi_favourite_status
      poi_id = params[:poi_id]

      return render_bad_request if poi_id.blank?

      poi = Poi.find(poi_id)

      return render_bad_request if poi.nil?

      render json: poi.favourites.exists?(user: @user)
    end

    def add
      poi_id = params[:poi_id]

      return render_bad_request if poi_id.blank?

      poi = Poi.find(poi_id)

      return render_bad_request if poi.nil?

      favourite = @user.favourites.create(poi: poi)

      if favourite.persisted?
        render json: {message: "OK"}
      else
        render_internal_server_error
      end
    end

    def remove
      poi_id = params[:poi_id]

      return render_bad_request if poi_id.blank?

      poi = Poi.find(poi_id)

      return render_bad_request if poi.nil?

      favourite = @user.favourites.find_by(poi: poi)

      if favourite
        favourite.destroy
        render json: {message: "OK"}
      else
        render_internal_server_error
      end
    end

    private

    def get_user
      @user = current_user

      return render_internal_server_error if @user.nil?
    end
  end
end
