class ReviewsController < ApplicationController
  def get_reviews
    render json: { reviews: Review.all.select(:id, :content, :author, :upvotes, :downvotes, :rating) }
  end

  def submit_review
    content = params[:content]
    author = params[:author].nil? ? "anonymous" : params[:author]
    rating = params[:rating]

    if content.nil? || rating.nil? || !rating.between?(1, 5)
      return render json: { message: 'Bad request' }, status: 400
    end

    review = Review.new
    review.content = content
    review.author = author
    review.rating = rating

    if review.valid?
      review.save
      return render json: { message: 'Review created successfully' }
    else
      return render json: { message: 'Bad request' }, status: 400
    end
  end
end
