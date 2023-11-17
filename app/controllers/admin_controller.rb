class AdminController < ApplicationController
  def get_users
    if !is_admin
      render json: { message: 'Not Authenticated' }, status: 401
    else
      render json: { users: User.all.select(:id, :email, :user_type) }
    end
  end

  def update_user
    if !is_admin
      render json: { message: 'Not Authenticated' }, status: 401
    else
      user = User.find(params[:id])

      update_email = !params[:email].nil? && user.email != params[:email] && valid_email(params[:email])
      update_user_type = !params[:user_type].nil? && user.user_type != params[:user_type] && valid_user_type(params[:user_type])

      if update_email
        user.email = params[:email]
      end

      if update_user_type
        user.user_type = params[:user_type]
      end

      if user.valid?
        user.save
        return render json: { message: 'Updated user successfully' }
      else
        return render json: { message: 'Bad request' }, status: 400
      end
    end
  end

  def delete_user
    if !is_admin
      render json: { message: 'Not Authenticated' }, status: 401
    else
      user = User.find(params[:id])

      if !user.nil?
        user.destroy
        return render json: { message: 'Deleted user successfully' }
      else
        return render json: { message: 'Bad request' }, status: 400
      end
    end
  end

  private def valid_email(email)
    # TODO
    true
  end

  private def valid_user_type(user_type)
    user_type == "customer" || user_type == "admin" || user_type == "reporter"
  end
end
