class Users::AuthenticationStatusController < ApplicationController
    include ApplicationHelper
  
    def index
      if is_authenticated
        render json: {message: 'Authenticated'}
      else
        render json: {message: 'Not Authenticated'}, status: 401
      end
    end
  end