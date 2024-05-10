# frozen_string_literal: true

# == Schema Information
#
# Table name: blocks
#
#  id              :bigint           not null, primary key
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  blocked_user_id :bigint           not null
#  user_id         :bigint           not null
#
# Indexes
#
#  index_blocks_on_blocked_user_id  (blocked_user_id)
#  index_blocks_on_user_id          (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (blocked_user_id => users.id)
#  fk_rails_...  (user_id => users.id)
#
require "rails_helper"

RSpec.describe Block do
  pending "add some examples to (or delete) #{__FILE__}"
end
