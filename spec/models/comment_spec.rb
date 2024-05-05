# == Schema Information
#
# Table name: comments
#
#  id         :bigint           not null, primary key
#  rating     :integer
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
require 'rails_helper'

RSpec.describe Comment, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
