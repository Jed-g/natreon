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
        review = Review.find(params[:id])

        if !review.nil?
          review.destroy
          return render json: { message: 'Deleted review successfully' }
        else
          return render json: { message: 'Bad request' }, status: 400
        end
      end
    end
  end
  