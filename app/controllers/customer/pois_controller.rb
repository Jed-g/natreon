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
          pictures:    poi.poi_pictures.map {|poi_picture| url_for(poi_picture.picture) }, # Include picture URLs,
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
        pictures:    poi.poi_pictures.map {|poi_picture| url_for(poi_picture.picture) }, # Include picture URLs,
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
          pictures:    poi.poi_pictures.map {|poi_picture| url_for(poi_picture.picture) }, # Include picture URLs,
          checkedIn:   poi.check_ins.exists?(user: @user),
          comments:    [] # Add later...
        }
      end

      render json: pois_formatted
    end

    def upload_poi_picture
      poi_id = params[:poi_id]
      @poi = Poi.find_by(id: poi_id)

      return render_not_found unless @poi # Handle case where POI is not found

      picture = params[:picture] # Assuming you're sending the pictures as part of the request params
      poi_picture = @poi.poi_pictures.build(user: @user)
      poi_picture.picture.attach(picture)

      if poi_picture.save
        return render_internal_server_error unless poi_picture.picture.attached?

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

    def render_not_found
      render json: { error: "Not Found" }, status: :not_found
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
