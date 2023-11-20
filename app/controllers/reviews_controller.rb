class ReviewsController < ApplicationController
  def get_reviews
    render json: { reviews: Review.all.order(created_at: :desc).select(:id, :content, :author, :upvotes, :downvotes, :rating) }
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

  def upvote_review
    id = params[:id]

    if id.nil?
      return render json: { message: 'Bad request' }, status: 400
    end

    review = Review.find(id)

    if review.nil?
      return render json: { message: 'Bad request' }, status: 400
    end

    review.upvotes += 1

    if review.valid?
      review.save
      return render json: { message: 'Review upvoted successfully' }
    else
      return render json: { message: 'Bad request' }, status: 400
    end
  end

  def downvote_review
    id = params[:id]

    if id.nil?
      return render json: { message: 'Bad request' }, status: 400
    end

    review = Review.find(id)

    if review.nil?
      return render json: { message: 'Bad request' }, status: 400
    end

    review.upvotes -= 1

    if review.valid?
      review.save
      return render json: { message: 'Review downvoted successfully' }
    else
      return render json: { message: 'Bad request' }, status: 400
    end
  end
end
