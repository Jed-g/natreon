class HomeController < ApplicationController

  def index
    if is_authenticated
      render json: {message: "authenticated"}
    else
      render json: {message: "not authenticated"}
    end
  end
  
end