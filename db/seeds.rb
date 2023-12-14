case Rails.env
when "test"
    User.find_or_create_by(email: "test@user.com") do |user|
        user.password = "password"
        user.user_type = 0
      end
    User.find_or_create_by(email: "test@admin.com") do |user|
        user.password = "password"
        user.user_type = 1
    end
    User.find_or_create_by(email: "test@reporter.com") do |user|
        user.password = "password"
        user.user_type = 2
    end
    Review.create(rating: 4, content:"trial_content_1", author:"author_1", upvotes: 10, downvotes:2)
    Review.create(rating: 4, content:"trial_content_2", author:"author_2", upvotes: 10, downvotes:2)
    Question.create(answer:nil , question:"test_question_1", upvotes:0, downvotes:0)
    Question.create(answer:"test_answer_2" , question:"test_question_2", upvotes:0, downvotes:0)

when "development"
    User.find_or_create_by(email: "test@user.com") do |user|
        user.password = "password"
        user.user_type = 0
      end
    User.find_or_create_by(email: "test@admin.com") do |user|
        user.password = "password"
        user.user_type = 1
    end
    User.find_or_create_by(email: "test@reporter.com") do |user|
        user.password = "password"
        user.user_type = 2
    end

when "production"

when "demo"
    User.find_or_create_by(email: "test@user.com") do |user|
        user.password = "password"
        user.user_type = 0
      end
    User.find_or_create_by(email: "test@admin.com") do |user|
        user.password = "password"
        user.user_type = 1
    end
    User.find_or_create_by(email: "test@reporter.com") do |user|
        user.password = "password"
        user.user_type = 2
    end
end