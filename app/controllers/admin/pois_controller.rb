# frozen_string_literal: true

module Admin  
  class PoisController < ApplicationController
    before_action :authorize_admin_controllers

    # GET /pois
    def index
      @pois = Poi.all

      render json: @pois
    end

    def all_pois
      render json: Poi.order(created_at: :desc).select(:id, :name, :description, :location, 
                    :features, :likes, :latitude, :longitude)
    end

    def create_poi
      poi = Poi.new(poi_params)

      if poi.save
        render json: {message: "Poi created successfully", poi: poi}
      else
        render json: poi.errors
      end
    end

    def edit_poi
      @poi = Poi.find(params[:id])

      @poi.name = params[:name] if update_name?
      @poi.description = params[:description] if update_description?
      @poi.features = params[:features] if update_features?
      @poi.location = params[:location] if update_location?
      @poi.latitude = params[:latitude] if update_latitude?
      @poi.longitude = params[:longitude] if update_longitude?
      return render_bad_request if @poi.nil?

      @poi.save
      render json: {message: "Updated poi successfully"}

    end

    def delete_poi
      read_id_param
      poi = Poi.find(@id)

      return render_bad_request if poi.nil?

      poi.destroy
      render json: {message: "Deleted poi successfully"}
    end

    # GET /pois/1
    def show
      render json: @poi
    end

    # POST /pois
    def create
      @poi = Poi.new(poi_params)

      if @poi.save
        render json: @poi, status: :created, location: @poi
      else
        render json: @poi.errors, status: :unprocessable_entity
      end
    end

    # PATCH/PUT /pois/1
    def update
      if @poi.update(poi_params)
        render json: @poi
      else
        render json: @poi.errors, status: :unprocessable_entity
      end
    end

    # DELETE /pois/1
    def destroy
      @poi.destroy
    end

    private
      # Use callbacks to share common setup or constraints between actions.
      def set_poi
        @poi = Poi.find(params[:id])
      end

      # Only allow a list of trusted parameters through.
      def poi_params
        params.require(:poi).permit(:name, :description, :location, :likes, :latitude, :longitude, features: [])
      end

      def read_id_param
        @id = params[:id]
        render_bad_request if @id.nil?
      end

      def update_name?
        !params[:name].nil?
      end

      def update_description?
        !params[:description].nil?
      end

      def update_features?
        !params[:features].nil?
      end

      def update_location?
        !params[:location].nil?
      end

      def update_latitude?
        !params[:latitude].nil?
      end

      def update_longitude?
        !params[:longitude].nil?
      end

  end
end
