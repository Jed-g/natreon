# == Schema Information
#
# Table name: comments
#
#  id         :bigint           not null, primary key
#  rating     :integer
#  reported   :boolean          default(FALSE)
#  text       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  poi_id     :bigint           not null
#  user_id    :bigint           not null
#
# Indexes
#
#  index_comments_on_poi_id   (poi_id)
#  index_comments_on_user_id  (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (poi_id => pois.id)
#  fk_rails_...  (user_id => users.id)
#
FactoryBot.define do
  factory :comment do
    poi { nil }
    user { nil }
    text { "MyString" }
    rating { 1 }
  end
end
