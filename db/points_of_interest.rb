FEATURES = Poi::FEATURES
POINTS_OF_INTEREST = [
    {latitude: 54.978252, longitude: -1.617439, name: 'Newcastle upon Tyne', location: 'newcastle', description: 'dummy desc', features: FEATURES.sample(rand(1..5)), likes: rand(0..1000), comments:[] },
    {latitude: 53.800755, longitude: -1.617439, name: 'Leeds', location: 'leeds', description: 'dummy desc', features: FEATURES.sample(rand(1..5)), likes: rand(0..1000) , comments:[]},
    {latitude: 53.381129, longitude: -1.464544, name: 'Sheffield', location: 'sheffield', description: 'dummy desc', features: FEATURES.sample(rand(1..5)), likes: rand(0..1000) ,         comments: [
        "The park is beautiful and peaceful.",
        "I love spending time at Weston Park!",
        "Great place for a picnic with family and friends.",
        "The bandstand performances are always enjoyable.",
        "Love seeing the ducks and fish in the pond."
    ]},
    {latitude: 53.480759, longitude: -2.242631, name: 'Manchester', location: 'manchester', description: 'dummy desc', features: FEATURES.sample(rand(1..5)), likes: rand(0..1000) , comments:[]},
    {latitude: 53.408371, longitude: -2.978481, name: 'Liverpool', location: 'liverpool', description: 'dummy desc', features: FEATURES.sample(rand(1..5)), likes: rand(0..1000) , comments:[]},
    {latitude: 52.486243, longitude: -1.890401, name: 'Birmingham', location: 'birmingham', description: 'dummy desc', features: FEATURES.sample(rand(1..5)), likes: rand(0..1000) , comments:[]},
    {latitude: 51.752022, longitude: -1.254341, name: 'Oxford', location: 'oxford', description: 'dummy desc', features: FEATURES.sample(rand(1..5)), likes: rand(0..1000) , comments:[]},
    {latitude: 51.507351, longitude: -0.127758, name: 'London', location: 'london', description: 'dummy desc', features: FEATURES.sample(rand(1..5)), likes: rand(0..1000) , comments:[]},
    {latitude: 52.630885, longitude: 1.297355, name: 'Norwich', location: 'norwich', description: 'dummy desc', features: FEATURES.sample(rand(1..5)), likes: rand(0..1000) , comments:[]},
    {latitude: 50.82253, longitude: -0.139475, name: 'Brighton', location: 'brighton', description: 'dummy desc', features: FEATURES.sample(rand(1..5)), likes: rand(0..1000) , comments:[]},
    {latitude: 50.9097, longitude: -1.40435, name: 'Southampton', location: 'southampton', description: 'dummy desc', features: FEATURES.sample(rand(1..5)), likes: rand(0..1000) , comments:[]},
    {latitude: 51.454513, longitude: -2.58791, name: 'Bristol', location: 'bristol', description: 'dummy desc', features: FEATURES.sample(rand(1..5)), likes: rand(0..1000) , comments:[]},
    {latitude: 51.481583, longitude: -3.188267, name: 'Cardiff', location: 'cardiff', description: 'dummy desc', features: FEATURES.sample(rand(1..5)), likes: rand(0..1000) , comments:[]},
    {latitude: 51.621441, longitude: -3.939813, name: 'Swansea', location: 'swansea', description: 'dummy desc', features: FEATURES.sample(rand(1..5)), likes: rand(0..1000) , comments:[]},
    {latitude: 50.375456, longitude: -4.142671, name: 'Plymouth', location: 'plymouth', description: 'dummy desc', features: FEATURES.sample(rand(1..5)), likes: rand(0..1000) , comments:[]},
    {latitude: 50.718412, longitude: -3.532631, name: 'Exeter', location: 'exeter', description: 'dummy desc', features: FEATURES.sample(rand(1..5)), likes: rand(0..1000) , comments:[]},
    {latitude: 51.10914, longitude: -2.361324, name: 'Glastonbury', location: 'glastonbury', description: 'dummy desc', features: FEATURES.sample(rand(1..5)), likes: rand(0..1000) , comments:[]},
    {latitude: 51.454264, longitude: -1.82621, name: 'Reading', location: 'reading', description: 'dummy desc', features: FEATURES.sample(rand(1..5)), likes: rand(0..1000) , comments:[]},
    {latitude: 51.454264, longitude: -0.97813, name: 'Basingstoke', location: 'basingstoke', description: 'dummy desc', features: FEATURES.sample(rand(1..5)), likes: rand(0..1000) , comments:[]},
    {latitude: 51.335345, longitude: -0.75557, name: 'Guildford', location: 'guildford', description: 'dummy desc', features: FEATURES.sample(rand(1..5)), likes: rand(0..1000) , comments:[]},
    {latitude: 51.41233, longitude: -0.376288, name: 'Kingston upon Thames', location: 'kingston', description: 'dummy desc', features: FEATURES.sample(rand(1..5)), likes: rand(0..1000) , comments:[]},
    {latitude: 51.44142, longitude: 0.278154, name: 'Maidstone', location: 'maidstone', description: 'dummy desc', features: FEATURES.sample(rand(1..5)), likes: rand(0..1000) , comments:[]},
    {latitude: 51.270363, longitude: 0.52249, name: 'Tunbridge Wells', location: 'tunbridge', description: 'dummy desc', features: FEATURES.sample(rand(1..5)), likes: rand(0..1000) , comments:[]},
    {latitude: 51.278707, longitude: 1.07561, name: 'Canterbury', location: 'canterbury', description: 'dummy desc', features: FEATURES.sample(rand(1..5)), likes: rand(0..1000) , comments:[]},
    {latitude: 51.35996, longitude: 1.17432, name: 'Margate', location: 'margate', description: 'dummy desc', features: FEATURES.sample(rand(1..5)), likes: rand(0..1000) , comments:[]},
    {latitude: 50.9097, longitude: 1.408852, name: 'Dover', location: 'dover', description: 'dummy desc', features: FEATURES.sample(rand(1..5)), likes: rand(0..1000) , comments:[]},
    {latitude: 51.656489, longitude: 0.73507, name: 'Chelmsford', location: 'chelmsford', description: 'dummy desc', features: FEATURES.sample(rand(1..5)), likes: rand(0..1000) , comments:[]},
    {latitude: 51.584151, longitude: 0.478913, name: 'Brentwood', location: 'brentwood', description: 'dummy desc', features: FEATURES.sample(rand(1..5)), likes: rand(0..1000) , comments:[]},
    {latitude: 51.588638, longitude: 0.267459, name: 'Romford', location: 'romford', description: 'dummy desc', features: FEATURES.sample(rand(1..5)), likes: rand(0..1000) , comments:[]},
    {latitude: 51.574244, longitude: 0.0799, name: 'Dagenham', location: 'dagenham', description: 'dummy desc', features: FEATURES.sample(rand(1..5)), likes: rand(0..1000) , comments:[]},
    {latitude: 53.38247, longitude: -1.48985, name: 'Weston Park', location: 'westonparksheffield', description: 'Tranquil urban park area offering picnic areas, a bandstand, statues & a duck & fish pond.',
        features: FEATURES.sample(rand(1..5)),
        likes: rand(0..1000),
        comments: [
            "The park is beautiful and peaceful.",
            "I love spending time at Weston Park!",
            "Great place for a picnic with family and friends.",
            "The bandstand performances are always enjoyable.",
            "Love seeing the ducks and fish in the pond."
        ]
    }
]

# REMOVE ONCE COMMENTS ARE IMPLEMENTED
POINTS_OF_INTEREST = POINTS_OF_INTEREST.map do |point|
    point.delete(:comments)
    point
end

Poi.upsert_all(POINTS_OF_INTEREST, record_timestamps: true)