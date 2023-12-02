# frozen_string_literal: true

class UtilsController < ApplicationController
  def geolocation_frontend
    ip = request.remote_ip
    results = Geocoder.search(ip)
    coords = results.first.coordinates
    return render json: {lat: coords[0], lon: coords[1]} unless coords.empty?

    render json: {message: "Location not found"}, status: :not_found
  end
end
