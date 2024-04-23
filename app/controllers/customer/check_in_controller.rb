# frozen_string_literal: true

module Customer
  class CheckInController < ApplicationController
    before_action :authorize_customer_controllers, :get_user
    before_action :process_params, only: [:check_in_candidates]

    MAXIMUM_DISTANCE_FOR_CHECK_IN_THRESHOLD_METERS = 500
    def check_in_candidates
      candidates = check_in_candidates_haversine(@latitude, @longitude, @accuracy_meters)
      render json: candidates
    end

    private

    def process_params
      latitude = params[:latitude]
      longitude = params[:longitude]
      accuracy_meters = params[:accuracy_meters]

      if latitude.present? && valid_decimal?(latitude) &&
         longitude.present? && valid_decimal?(longitude) &&
         accuracy_meters.present? && valid_decimal?(accuracy_meters)

        @latitude = latitude.to_d
        @longitude = longitude.to_d
        @accuracy_meters = accuracy_meters.to_d
      else
        render_bad_request
      end
    end

    def valid_decimal?(str)
      true if Float(str) rescue false
    end

    def get_user
      @user = current_user

      return render_internal_server_error if @user.nil?
    end

    def check_in_candidates_haversine(user_latitude, user_longitude, user_accuracy_meters)
      earth_radius_km = 6371.0
      earth_radius_m = earth_radius_km * 1000

      pois = Poi.where(%{
          (#{earth_radius_m} * acos(cos(radians(:latitude)) * cos(radians(latitude)) *
          cos(radians(longitude) - radians(:longitude)) + sin(radians(:latitude)) *
          sin(radians(latitude)))) <= :maximum_distance
        }, latitude: user_latitude, longitude: user_longitude,
      maximum_distance: MAXIMUM_DISTANCE_FOR_CHECK_IN_THRESHOLD_METERS + user_accuracy_meters)

      pois_formatted = pois.map do |poi|
        next if poi.check_ins.exists?(user: @user)

        {
          lngLat:      {lng: poi.longitude, lat: poi.latitude},
          name:        poi.name,
          id:          poi.id,
          isFavourite: poi.favourites.exists?(user: @user),
          description: poi.description,
          features:    poi.features,
          likes:       poi.likes,
          checkedIn:   false,
          comments:    [] # Add later...
        }
      end.compact

      pois_formatted
    end
  end
end
