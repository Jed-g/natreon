POINTS_OF_INTEREST = [
  {latitude: 53.39059, longitude: -1.50906, name: 'Bole Hill Recreation Ground', location: 'sheffield',
   description: 'Bolehill Recreation Ground, known locally as The Bole Hills is a public open space in the suburb of Crookes within the city of Sheffield, England.', features: [Poi::FEATURES[1], Poi::FEATURES[5]], likes: rand(0..1000)},
  {latitude: 53.38247, longitude: -1.48985, name: 'Weston Park', location: 'sheffield', description: 'Tranquil urban park area offering picnic areas, a bandstand, statues & a duck & fish pond.',
      features: [Poi::FEATURES[2], Poi::FEATURES[5], Poi::FEATURES[10], Poi::FEATURES[11]],
      likes: rand(0..1000)},
  {latitude: 53.38362, longitude: -1.49270, name: 'Crookes Valley Park', location: 'sheffield', description: 'Crookes Valley Park is an area of public parkland in the Crookesmoor area of the City of Sheffield in South Yorkshire, England.',
      features: [Poi::FEATURES[5], Poi::FEATURES[8], Poi::FEATURES[11]],
      likes: rand(0..1000)},
  {latitude: 53.38685, longitude: -1.48641, name: 'Ponderosa', location: 'sheffield', description: 'Park in a large bowl-shaped indentation with a lawned area hosting events, woods & a playground.',
      features: [Poi::FEATURES[5]],
      likes: rand(0..1000)},
  {latitude: 53.37900, longitude: -1.47831, name: 'Devonshire Green', location: 'sheffield', description: 'Energetic recreational retreat featuring an amphitheater, grassy lawn & a concrete skate park.',
      features: [Poi::FEATURES[5], Poi::FEATURES[9], Poi::FEATURES[8]],
      likes: rand(0..1000)},
  {latitude: 53.36862, longitude: -1.50895, name: 'Endcliffe Park', location: 'sheffield', description: 'Large park dating from 1887, with statue of Queen Victoria, childrens playground, cafe and lake.',
      features: [Poi::FEATURES[9]],
      likes: rand(0..1000)},
  {latitude: 53.37215, longitude: -1.49764, name: 'Botanical Gardens', location: 'sheffield', description: 'Plants and flowers from around the world in themed areas, formal gardens and large glasshouses',
      features: [Poi::FEATURES[2], Poi::FEATURES[5], Poi::FEATURES[9], Poi::FEATURES[11]],
      likes: rand(0..1000)},
  {latitude: 53.37997, longitude: -1.46969, name: 'Peace Gardens', location: 'sheffield', description: 'Open town hall square in the heart of the city with water fountains, cascades and war memorials.',
      features: [Poi::FEATURES[3], Poi::FEATURES[4], Poi::FEATURES[5], Poi::FEATURES[6], Poi::FEATURES[7], Poi::FEATURES[8]],
      likes: rand(0..1000)},
  {latitude: 53.39831, longitude: -1.47515, name: 'Parkwood Springs', location: 'sheffield', description: '​Parkwood Springs is an amazing, natural, wild space close to the centre of the city of Sheffield.',
      features: [Poi::FEATURES[0], Poi::FEATURES[1], Poi::FEATURES[5]],
      likes: rand(0..1000)}
]

Poi.upsert_all(POINTS_OF_INTEREST, unique_by: [:name], record_timestamps: true)
