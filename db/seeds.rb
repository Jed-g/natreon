case Rails.env
when "test"
    User.create(email: "test@admin.com", password: "password", user_type: "admin")
    User.create(email: "test@user.com", password: "password", user_type: "customer")
    Review.create(rating: 4, content:"trial_content_1", author:"author_1", upvotes: 10, downvotes:2)
    Review.create(rating: 4, content:"trial_content_2", author:"author_2", upvotes: 10, downvotes:2)
    Question.create(answer:nil , question:"test_question_1", upvotes:0, downvotes:0)
    Question.create(answer:"test_answer_2" , question:"test_question_2", upvotes:0, downvotes:0)
when "development"

when "production"

end