# frozen_string_literal: true

module Customer
  class PoisController < ApplicationController
    before_action :authorize_customer_controllers, :get_user
    before_action :validate_params, only: [:all]

    def all
      pois = Poi.where(latitude: @south..@north, longitude: @west..@east)
      pois_formatted = pois.map do |poi|
        {
          lngLat:      {lng: poi.longitude, lat: poi.latitude},
          name:        poi.name,
          id:          poi.id,
          isFavourite: poi.favourites.exists?(user: @user),
          description: poi.description,
          features:    poi.features,
          likes:       poi.likes,
          checkedIn:   poi.check_ins.exists?(user: @user),
          comments:    [] # Add later...
        }
      end

      render json: pois_formatted
    end

    def single_poi_by_id
      poi_id = params[:id]

      return render_bad_request if poi_id.blank?

      poi = Poi.find(poi_id)

      return render_bad_request if poi.nil?

      poi_formatted = {
        lngLat:      {lng: poi.longitude, lat: poi.latitude},
        name:        poi.name,
        id:          poi.id,
        isFavourite: poi.favourites.exists?(user: @user),
        description: poi.description,
        features:    poi.features,
        likes:       poi.likes,
        checkedIn:   poi.check_ins.exists?(user: @user),
        comments:    [] # Add later...
      }

      render json: poi_formatted
    end

    def all_poi_features
      render json: {allPOIFeatures: Poi::FEATURES}
    end

    SIMILARITY_THRESHOLD = 0.3
    MAXIMUM_NUMBER_OF_POI_SEARCH_RESULTS = 30
    def search_by_name
      poi_name_query_string = params[:name]

      return render_bad_request if poi_name_query_string.blank?

      pois = Poi.where("similarity(name, ?) > #{SIMILARITY_THRESHOLD}", poi_name_query_string)
                .order(Arel.sql('similarity(name, ' + ActiveRecord::Base.connection.quote(poi_name_query_string) + ') DESC'))
                .limit(MAXIMUM_NUMBER_OF_POI_SEARCH_RESULTS)

      pois_formatted = pois.map do |poi|
        {
          lngLat:      {lng: poi.longitude, lat: poi.latitude},
          name:        poi.name,
          id:          poi.id,
          isFavourite: poi.favourites.exists?(user: @user),
          description: poi.description,
          features:    poi.features,
          likes:       poi.likes,
          checkedIn:   poi.check_ins.exists?(user: @user),
          comments:    [] # Add later...
        }
      end

      render json: pois_formatted
    end

    private

    def get_user
      @user = current_user

      return render_internal_server_error if @user.nil?
    end

    def validate_params
      params.require(:north)
      params.require(:south)
      params.require(:east)
      params.require(:west)

      @north = params[:north].to_f
      @south = params[:south].to_f
      @east = params[:east].to_f
      @west = params[:west].to_f

      unless @north.between?(-90,
                             90) && @south.between?(-90, 90) && @east.between?(-180, 180) && @west.between?(-180, 180)
        return render_bad_request
      end

      unless @north >= @south && @east >= @west
        return render_bad_request
      end
    end
  end
end
