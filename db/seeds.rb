case Rails.env
when "test"
    User.find_or_create_by(email: "test@user.com") do |user|
        user.password = "password"
        user.user_type = 0
        user.nickname = "test_user"
        user.description = "test_description"

      end
    User.find_or_create_by(email: "test@admin.com") do |user|
        user.password = "password"
        user.user_type = 1
        user.nickname = "test_user"
        user.description = "test_description"

    end
    # User.find_or_create_by(email: "test@reporter.com") do |user|
    #     user.password = "password"
    #     user.user_type = 2
    # end
    Review.create(rating: 4, content:"trial_content_1", author:"author_1", upvotes: 10, downvotes:2)
    Review.create(rating: 4, content:"trial_content_2", author:"author_2", upvotes: 10, downvotes:2)
    Question.create(answer:nil , question:"test_question_1", upvotes:0, downvotes:0)
    Question.create(answer:"test_answer_2" , question:"test_question_2", upvotes:0, downvotes:0)

when "development"
    User.find_or_create_by(email: "test@user.com") do |user|
        user.password = "password"
        user.user_type = 0
        user.nickname = "test_user"
        user.description = "test_description"

      end
      User.find_or_create_by(email: "test1@user.com") do |user|
        user.password = "password"
        user.user_type = 0
        user.nickname = "test1_user"
        user.description = "test1_description"

      end
    User.find_or_create_by(email: "test@admin.com") do |user|
        user.password = "password"
        user.user_type = 1
        user.nickname = "test_user"
        user.description = "test_description"

    end
    User.find_or_create_by(email: "test@reporter.com") do |user|
        user.password = "password"
        user.user_type = 2
        user.nickname = "test_user"
        user.description = "test_description"

    end

  points_of_interest = [
    { lngLat: { lng: -1.617439, lat: 54.978252 }, name: 'Newcastle upon Tyne', id: 'newcastle', description: 'dummy desc', features: [], comments:[] },
    { lngLat: { lng: -1.617439, lat: 53.800755 }, name: 'Leeds', id: 'leeds', description: 'dummy desc', features: [] , comments:[]},
    { lngLat: { lng: -1.464544, lat: 53.381129 }, name: 'Sheffield', id: 'sheffield', description: 'dummy desc', features: [] ,         comments: [
        "The park is beautiful and peaceful.",
        "I love spending time at Weston Park!",
        "Great place for a picnic with family and friends.",
        "The bandstand performances are always enjoyable.",
        "Love seeing the ducks and fish in the pond."
    ]},
    { lngLat: { lng: -2.242631, lat: 53.480759 }, name: 'Manchester', id: 'manchester', description: 'dummy desc', features: [] , comments:[]},
    { lngLat: { lng: -2.978481, lat: 53.408371 }, name: 'Liverpool', id: 'liverpool', description: 'dummy desc', features: [] , comments:[]},
    { lngLat: { lng: -1.890401, lat: 52.486243 }, name: 'Birmingham', id: 'birmingham', description: 'dummy desc', features: [] , comments:[]},
    { lngLat: { lng: -1.254341, lat: 51.752022 }, name: 'Oxford', id: 'oxford', description: 'dummy desc', features: [] , comments:[]},
    { lngLat: { lng: -0.127758, lat: 51.507351 }, name: 'London', id: 'london', description: 'dummy desc', features: [] , comments:[]},
    { lngLat: { lng: 1.297355, lat: 52.630885 }, name: 'Norwich', id: 'norwich', description: 'dummy desc', features: [] , comments:[]},
    { lngLat: { lng: -0.139475, lat: 50.82253 }, name: 'Brighton', id: 'brighton', description: 'dummy desc', features: [] , comments:[]},
    { lngLat: { lng: -1.40435, lat: 50.9097 }, name: 'Southampton', id: 'southampton', description: 'dummy desc', features: [] , comments:[]},
    { lngLat: { lng: -2.58791, lat: 51.454513 }, name: 'Bristol', id: 'bristol', description: 'dummy desc', features: [] , comments:[]},
    { lngLat: { lng: -3.188267, lat: 51.481583 }, name: 'Cardiff', id: 'cardiff', description: 'dummy desc', features: [] , comments:[]},
    { lngLat: { lng: -3.939813, lat: 51.621441 }, name: 'Swansea', id: 'swansea', description: 'dummy desc', features: [] , comments:[]},
    { lngLat: { lng: -4.142671, lat: 50.375456 }, name: 'Plymouth', id: 'plymouth', description: 'dummy desc', features: [] , comments:[]},
    { lngLat: { lng: -3.532631, lat: 50.718412 }, name: 'Exeter', id: 'exeter', description: 'dummy desc', features: [] , comments:[]},
    { lngLat: { lng: -2.361324, lat: 51.10914 }, name: 'Glastonbury', id: 'glastonbury', description: 'dummy desc', features: [] , comments:[]},
    { lngLat: { lng: -1.82621, lat: 51.454264 }, name: 'Reading', id: 'reading', description: 'dummy desc', features: [] , comments:[]},
    { lngLat: { lng: -0.97813, lat: 51.454264 }, name: 'Basingstoke', id: 'basingstoke', description: 'dummy desc', features: [] , comments:[]},
    { lngLat: { lng: -0.75557, lat: 51.335345 }, name: 'Guildford', id: 'guildford', description: 'dummy desc', features: [] , comments:[]},
    { lngLat: { lng: -0.376288, lat: 51.41233 }, name: 'Kingston upon Thames', id: 'kingston', description: 'dummy desc', features: [] , comments:[]},
    { lngLat: { lng: 0.278154, lat: 51.44142 }, name: 'Maidstone', id: 'maidstone', description: 'dummy desc', features: [] , comments:[]},
    { lngLat: { lng: 0.52249, lat: 51.270363 }, name: 'Tunbridge Wells', id: 'tunbridge', description: 'dummy desc', features: [] , comments:[]},
    { lngLat: { lng: 1.07561, lat: 51.278707 }, name: 'Canterbury', id: 'canterbury', description: 'dummy desc', features: [] , comments:[]},
    { lngLat: { lng: 1.17432, lat: 51.35996 }, name: 'Margate', id: 'margate', description: 'dummy desc', features: [] , comments:[]},
    { lngLat: { lng: 1.408852, lat: 50.9097 }, name: 'Dover', id: 'dover', description: 'dummy desc', features: [] , comments:[]},
    { lngLat: { lng: 0.73507, lat: 51.656489 }, name: 'Chelmsford', id: 'chelmsford', description: 'dummy desc', features: [] , comments:[]},
    { lngLat: { lng: 0.478913, lat: 51.584151 }, name: 'Brentwood', id: 'brentwood', description: 'dummy desc', features: [] , comments:[]},
    { lngLat: { lng: 0.267459, lat: 51.588638 }, name: 'Romford', id: 'romford', description: 'dummy desc', features: [] , comments:[]},
    { lngLat: { lng: 0.0799, lat: 51.574244 }, name: 'Dagenham', id: 'dagenham', description: 'dummy desc', features: [] , comments:[]},
    { lngLat: { lng: -1.48985, lat: 53.38247 }, name: 'Weston Park', id: 'westonparksheffield', description: 'Tranquil urban park area offering picnic areas, a bandstand, statues & a duck & fish pond.',
        features: [
            "Water Fountain",
            "Statue"
        ],
        comments: [
            "The park is beautiful and peaceful.",
            "I love spending time at Weston Park!",
            "Great place for a picnic with family and friends.",
            "The bandstand performances are always enjoyable.",
            "Love seeing the ducks and fish in the pond."
        ]
    }
  ]

  # Iterate over each POI and create a new Poi record
  points_of_interest.each do |poi|
    new_poi = Poi.new(
      name: poi[:name],
      description: poi[:description],
      latitude: poi[:lngLat][:lat],
      longitude: poi[:lngLat][:lng],
      features: poi[:features].map(&:strip)
      # NOT CAPTURED LIKES AND LOCATION YET AND SCHEMA NEEDS TO BE UPDATED FOR COMMENTS
    )
    
    # Save the POI record
    if new_poi.save
      puts "POI '#{poi[:name]}' created successfully!"
    else
      puts "Failed to create POI '#{poi[:name]}': #{new_poi.errors.full_messages.join(', ')}"
    end
  end

when "production"

when "demo"
    User.find_or_create_by(email: "test@user.com") do |user|
        user.password = "password"
        user.user_type = 0
        user.nickname = "test_user"
        user.description = "test_description"

      end
      User.find_or_create_by(email: "test1@user.com") do |user|
        user.password = "password"
        user.user_type = 0
        user.nickname = "test1_user"
        user.description = "test1_description"

      end
    User.find_or_create_by(email: "test@admin.com") do |user|
        user.password = "password"
        user.user_type = 1
        user.nickname = "test_user"
        user.description = "test_description"

    end
    User.find_or_create_by(email: "test@reporter.com") do |user|
        user.password = "password"
        user.user_type = 2
        user.nickname = "test_user"
        user.description = "test_description"

    end
end