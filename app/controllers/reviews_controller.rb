class ReviewsController < ApplicationController
  def get_reviews
    render json: { reviews: Review.all.order(created_at: :desc).select(:id, :content, :author, :upvotes, :downvotes, :rating),
      upvoted: session[:reviews_upvoted], downvoted: session[:reviews_downvoted] }
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

    if session[:reviews_upvoted].nil?
      session[:reviews_upvoted] = []
    end

    if session[:reviews_upvoted].include?(id)
      return render json: { message: 'Already upvoted' }, status: 400
    end

    session[:reviews_upvoted].append(id)

    if session[:reviews_downvoted].nil?
      session[:reviews_downvoted] = []
    end

    if session[:reviews_downvoted].include?(id)
      review.downvotes -= 1
      session[:reviews_downvoted].delete(id)
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

    if session[:reviews_downvoted].nil?
      session[:reviews_downvoted] = []
    end

    if session[:reviews_downvoted].include?(id)
      return render json: { message: 'Already downvoted' }, status: 400
    end

    session[:reviews_downvoted].append(id)

    if session[:reviews_upvoted].nil?
      session[:reviews_upvoted] = []
    end

    if session[:reviews_upvoted].include?(id)
      review.upvotes -= 1
      session[:reviews_upvoted].delete(id)
    end

    review.downvotes += 1

    if review.valid?
      review.save
      return render json: { message: 'Review downvoted successfully' }
    else
      return render json: { message: 'Bad request' }, status: 400
    end
  end

  def cancel_upvote_review
    id = params[:id]

    if id.nil?
      return render json: { message: 'Bad request' }, status: 400
    end

    review = Review.find(id)

    if review.nil?
      return render json: { message: 'Bad request' }, status: 400
    end

    if session[:reviews_upvoted].nil?
      session[:reviews_upvoted] = []
    end

    if !session[:reviews_upvoted].include?(id)
      return render json: { message: 'Nothing to cancel, review hasn\'t been upvoted' }, status: 400
    end

    session[:reviews_upvoted].delete(id)

    review.upvotes -= 1

    if review.valid?
      review.save
      return render json: { message: 'Review upvote cancelled successfully' }
    else
      return render json: { message: 'Bad request' }, status: 400
    end
  end

  def cancel_downvote_review
    id = params[:id]

    if id.nil?
      return render json: { message: 'Bad request' }, status: 400
    end

    review = Review.find(id)

    if review.nil?
      return render json: { message: 'Bad request' }, status: 400
    end

    if session[:reviews_downvoted].nil?
      session[:reviews_downvoted] = []
    end

    if !session[:reviews_downvoted].include?(id)
      return render json: { message: 'Nothing to cancel, review hasn\'t been downvoted' }, status: 400
    end

    session[:reviews_downvoted].delete(id)

    review.downvotes -= 1

    if review.valid?
      review.save
      return render json: { message: 'Review downvote cancelled successfully' }
    else
      return render json: { message: 'Bad request' }, status: 400
    end
  end
end
