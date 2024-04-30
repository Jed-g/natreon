class SetDefaultNicknameDescriptionUsers < ActiveRecord::Migration[7.0]
  def change
    change_column_default :users, :nickname, 'DEFAULT'
    change_column_default :users, :description, 'DEFAULT'
  end
end
