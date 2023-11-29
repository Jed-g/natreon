class QuestionsController < ApplicationController
  def get_questions
    session[:questions_submitted] = [] if session[:questions_submitted].nil?

    awaiting_approval = Question.where(answer: nil).select do |question|
      session[:questions_submitted].include?(question.id)
    end

    render json: {questions:         Question.where.not(answer: nil).order(created_at: :desc).select(:id, :question, :answer, :upvotes, :downvotes),
                  awaiting_approval:}
  end

  def submit_question
    question = params[:question]

    return render json: {message: "Bad request"}, status: :bad_request if question.nil? || question.length == 0

    question_object = Question.new
    question_object.question = question

    return render json: {message: "Bad request"}, status: :bad_request unless question_object.valid?

    question_object.save

    session[:questions_submitted] = [] if session[:questions_submitted].nil?

    session[:questions_submitted].append(question_object.id)

    render json: {message: "Question created successfully"}
  end

  def upvote_question
    id = params[:id]

    return render json: {message: "Bad request"}, status: :bad_request if id.nil?

    question = Question.find(id)

    return render json: {message: "Bad request"}, status: :bad_request if question.nil?

    session[:questions_upvoted] = [] if session[:questions_upvoted].nil?

    return render json: {message: "Already upvoted"}, status: :bad_request if session[:questions_upvoted].include?(id)

    session[:questions_upvoted].append(id)

    session[:questions_downvoted] = [] if session[:questions_downvoted].nil?

    if session[:questions_downvoted].include?(id)
      question.downvotes -= 1
      session[:questions_downvoted].delete(id)
    end

    question.upvotes += 1

    return render json: {message: "Bad request"}, status: :bad_request unless question.valid?

    question.save
    render json: {message: "Question upvoted successfully"}
  end

  def downvote_question
    id = params[:id]

    return render json: {message: "Bad request"}, status: :bad_request if id.nil?

    question = Question.find(id)

    return render json: {message: "Bad request"}, status: :bad_request if question.nil?

    session[:questions_downvoted] = [] if session[:questions_downvoted].nil?

    if session[:questions_downvoted].include?(id)
      return render json:   {message: "Already downvoted"},
                    status: :bad_request
    end

    session[:questions_downvoted].append(id)

    session[:questions_upvoted] = [] if session[:questions_upvoted].nil?

    if session[:questions_upvoted].include?(id)
      question.upvotes -= 1
      session[:questions_upvoted].delete(id)
    end

    question.downvotes += 1

    return render json: {message: "Bad request"}, status: :bad_request unless question.valid?

    question.save
    render json: {message: "Question downvoted successfully"}
  end

  def cancel_upvote_question
    id = params[:id]

    return render json: {message: "Bad request"}, status: :bad_request if id.nil?

    question = Question.find(id)

    return render json: {message: "Bad request"}, status: :bad_request if question.nil?

    session[:questions_upvoted] = [] if session[:questions_upvoted].nil?

    unless session[:questions_upvoted].include?(id)
      return render json: {message: "Nothing to cancel, question hasn't been upvoted"}, status: :bad_request
    end

    session[:questions_upvoted].delete(id)

    question.upvotes -= 1

    return render json: {message: "Bad request"}, status: :bad_request unless question.valid?

    question.save
    render json: {message: "Question upvote cancelled successfully"}
  end

  def cancel_downvote_question
    id = params[:id]

    return render json: {message: "Bad request"}, status: :bad_request if id.nil?

    question = Question.find(id)

    return render json: {message: "Bad request"}, status: :bad_request if question.nil?

    session[:questions_downvoted] = [] if session[:questions_downvoted].nil?

    unless session[:questions_downvoted].include?(id)
      return render json: {message: "Nothing to cancel, question hasn't been downvoted"}, status: :bad_request
    end

    session[:questions_downvoted].delete(id)

    question.downvotes -= 1

    return render json: {message: "Bad request"}, status: :bad_request unless question.valid?

    question.save
    render json: {message: "Question downvote cancelled successfully"}
  end
end
