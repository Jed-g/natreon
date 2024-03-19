module Admin  
  class PoisController < ApplicationController
    before_action :set_poi, only: %i[ show update destroy ]

    # GET /pois
    def index
      @pois = Poi.all

      render json: @pois
    end

    def all_pois
      pois = Poi.order(created_at: :desc).select(:id, :name, :description, :location, :location, :features, :likes, :latitude, :longitude)
      render json: {pois: pois}
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
        params.require(:poi).permit(:name, :description, :location, :features, :likes, :latitude, :longitude)
      end
  end
end
