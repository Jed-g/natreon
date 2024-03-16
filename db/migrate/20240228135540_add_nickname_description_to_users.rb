class AddNicknameDescriptionToUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :nickname, :string, null: false
    add_column :users, :description, :text, null: false
  end
end
