# frozen_string_literal: true

module Users
  class PoisController < ApplicationController
    before_action :validate_params, only: [:all]

    def all
      pois = Poi.where(latitude: @south..@north, longitude: @west..@east)
      pois_formatted = pois.map do |poi|
        {
          lngLat:      {lng: poi.longitude, lat: poi.latitude},
          name:        poi.name,
          id:          poi.id,
          description: poi.description,
          features:    poi.features,
          comments:    [] # Add later...
        }
      end

      render json: {pois: pois_formatted}
    end

    def all_poi_features
      render json: {allPOIFeatures: Poi::FEATURES}
    end

    private

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
