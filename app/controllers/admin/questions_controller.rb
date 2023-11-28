class Admin::QuestionsController < ApplicationController
  def get_questions
    return render json: { message: 'Not Authorized' }, status: 401 unless is_admin

    render json: { questions: Question.all.order(created_at: :desc).select(:id, :question, :answer, :upvotes,
                                                                           :downvotes) }
  end

  def answer_edit_create_question
    return render json: { message: 'Not Authorized' }, status: 401 unless is_admin

    question_object = Question.find(params[:id])

    return render json: { message: 'Bad request' }, status: 400 if question_object.nil?

    question = params[:question]
    answer = params[:answer]

    question = question_object.question if question.nil? || question.length == 0

    answer = nil if !answer.nil? && answer.length == 0

    question_object.question = question
    question_object.answer = answer

    return render json: { message: 'Internal server error' }, status: 500 unless question_object.valid?

    question_object.save
    render json: { message: 'Question answered/edited successfully' }
  end

  def delete_question
    return render json: { message: 'Not Authorized' }, status: 401 unless is_admin

    question = Question.find(params[:id])

    return render json: { message: 'Bad request' }, status: 400 if review.nil?

    question.destroy
    render json: { message: 'Question deleted successfully' }
  end
end
