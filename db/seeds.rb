case Rails.env
when "test"
    User.create(email: "test@admin.com", password: "password", user_type: "admin")
when "development"

when "production"

end