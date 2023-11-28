class ReviewsController < ApplicationController
  def get_reviews
    render json: { reviews: Review.all.order(created_at: :desc).select(:id, :content, :author, :upvotes, :downvotes, :rating),
                   upvoted: session[:reviews_upvoted], downvoted: session[:reviews_downvoted] }
  end

  def submit_review
    content = params[:content]
    author = params[:author].nil? ? 'anonymous' : params[:author]
    rating = params[:rating]

    return render json: { message: 'Bad request' }, status: 400 if content.nil? || rating.nil? || !rating.between?(1, 5)

    review = Review.new
    review.content = content
    review.author = author
    review.rating = rating

    return render json: { message: 'Bad request' }, status: 400 unless review.valid?

    review.save
    render json: { message: 'Review created successfully' }
  end

  def upvote_review
    id = params[:id]

    return render json: { message: 'Bad request' }, status: 400 if id.nil?

    review = Review.find(id)

    return render json: { message: 'Bad request' }, status: 400 if review.nil?

    session[:reviews_upvoted] = [] if session[:reviews_upvoted].nil?

    return render json: { message: 'Already upvoted' }, status: 400 if session[:reviews_upvoted].include?(id)

    session[:reviews_upvoted].append(id)

    session[:reviews_downvoted] = [] if session[:reviews_downvoted].nil?

    if session[:reviews_downvoted].include?(id)
      review.downvotes -= 1
      session[:reviews_downvoted].delete(id)
    end

    review.upvotes += 1

    return render json: { message: 'Bad request' }, status: 400 unless review.valid?

    review.save
    render json: { message: 'Review upvoted successfully' }
  end

  def downvote_review
    id = params[:id]

    return render json: { message: 'Bad request' }, status: 400 if id.nil?

    review = Review.find(id)

    return render json: { message: 'Bad request' }, status: 400 if review.nil?

    session[:reviews_downvoted] = [] if session[:reviews_downvoted].nil?

    return render json: { message: 'Already downvoted' }, status: 400 if session[:reviews_downvoted].include?(id)

    session[:reviews_downvoted].append(id)

    session[:reviews_upvoted] = [] if session[:reviews_upvoted].nil?

    if session[:reviews_upvoted].include?(id)
      review.upvotes -= 1
      session[:reviews_upvoted].delete(id)
    end

    review.downvotes += 1

    return render json: { message: 'Bad request' }, status: 400 unless review.valid?

    review.save
    render json: { message: 'Review downvoted successfully' }
  end

  def cancel_upvote_review
    id = params[:id]

    return render json: { message: 'Bad request' }, status: 400 if id.nil?

    review = Review.find(id)

    return render json: { message: 'Bad request' }, status: 400 if review.nil?

    session[:reviews_upvoted] = [] if session[:reviews_upvoted].nil?

    unless session[:reviews_upvoted].include?(id)
      return render json: { message: 'Nothing to cancel, review hasn\'t been upvoted' }, status: 400
    end

    session[:reviews_upvoted].delete(id)

    review.upvotes -= 1

    return render json: { message: 'Bad request' }, status: 400 unless review.valid?

    review.save
    render json: { message: 'Review upvote cancelled successfully' }
  end

  def cancel_downvote_review
    id = params[:id]

    return render json: { message: 'Bad request' }, status: 400 if id.nil?

    review = Review.find(id)

    return render json: { message: 'Bad request' }, status: 400 if review.nil?

    session[:reviews_downvoted] = [] if session[:reviews_downvoted].nil?

    unless session[:reviews_downvoted].include?(id)
      return render json: { message: 'Nothing to cancel, review hasn\'t been downvoted' }, status: 400
    end

    session[:reviews_downvoted].delete(id)

    review.downvotes -= 1

    return render json: { message: 'Bad request' }, status: 400 unless review.valid?

    review.save
    render json: { message: 'Review downvote cancelled successfully' }
  end
end
