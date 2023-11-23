class Admin::ReviewsController < ApplicationController
    def get_reviews
      if !is_admin
        render json: { message: 'Not Authenticated' }, status: 401
      else
        render json: { users: Review.all.order(created_at: :desc).select(:id, :content, :author, :upvotes, :downvotes, :rating) }
      end
    end
  
    def delete_review
      if !is_admin
        render json: { message: 'Not Authenticated' }, status: 401
      else
        #TODO
      end
    end
  end
  