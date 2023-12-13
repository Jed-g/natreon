case Rails.env
when "test"
    User.create(email: "test@admin.com", password: "password", user_type: "admin")
    User.create(email: "test@user.com", password: "password", user_type: "customer")
    Review.create(rating: 4, content:"trial_content_1", author:"author_1", upvotes: 10, downvotes:2)
    Review.create(rating: 4, content:"trial_content_2", author:"author_2", upvotes: 10, downvotes:2)
when "development"

when "production"

end