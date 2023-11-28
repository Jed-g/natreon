class Admin::ReviewsController < ApplicationController
  def get_reviews
    return render json: { message: 'Not Authorized' }, status: 401 unless is_admin

    render json: { users: Review.all.order(created_at: :desc).select(:id, :content, :author, :upvotes, :downvotes,
                                                                     :rating) }
  end

  def delete_review
    return render json: { message: 'Not Authorized' }, status: 401 unless is_admin

    review = Review.find(params[:id])

    return render json: { message: 'Bad request' }, status: 400 if review.nil?

    review.destroy
    render json: { message: 'Deleted review successfully' }
  end
end
