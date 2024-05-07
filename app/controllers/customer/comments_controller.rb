class Customer::CommentsController < ApplicationController
  before_action :authorize_customer_controllers, :get_user

  def get_user
    @user = current_user
    return render_internal_server_error if @user.nil?
  end

  def all
    poi_id = params[:poiId]  # Retrieve poi_id from request parameters
    Rails.logger.debug "Received poi_id: #{poi_id}"  # Log the poi_id

    comments = Comment.where(poi_id: poi_id).map do |comment|
      {
        id: comment.id,
        userId: comment.user_id,
        nickname: comment.user.nickname,
        poiId: comment.poi_id,
        text: comment.text,
        rating: comment.rating
      }
    end
    Rails.logger.debug "Selected comments: #{comments}"  # Log the selected comments

    render json: comments
  end
  
  def create
    # Check if the user is logged in
    return render json: { error: 'Unauthorized' }, status: :unauthorized unless @user

    # Log incoming parameters
    Rails.logger.debug("Incoming parameters: #{params}")

    # Find the POI record based on its ID
    poi = Poi.find(comment_params[:poi_id])

    # Create a new comment
    comment = @user.comments.build(comment_params)
    Rails.logger.debug("New comment: #{comment.inspect}")

    # Check if the provided user_id matches the current user's ID
    if comment.user_id != @user.id
      return render json: { error: 'User ID does not match the current user' }, status: :unprocessable_entity
    end

    # Check if the provided poi_id exists
    unless Poi.exists?(id: poi.id)
      return render json: { error: 'Invalid POI ID' }, status: :unprocessable_entity
    end

    if comment.save
      render json: comment, status: :created
    else
      render json: { error: comment.errors.full_messages }, status: :unprocessable_entity
    end
  end

  # comments_controller.rb

  def report
    @comment = Comment.find(params[:id])
    if @comment.update(reported: params[:reported])
      render json: { message: 'Comment reported successfully.' }, status: :ok
    else
      render json: { error: 'Failed to report comment.' }, status: :unprocessable_entity
    end
  end


  private

  def comment_params
    params.require(:comment).permit(:id, :user_id, :poi_id, :text, :rating)
  end
end