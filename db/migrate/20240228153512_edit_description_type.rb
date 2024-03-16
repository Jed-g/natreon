class EditDescriptionType < ActiveRecord::Migration[7.0]
  def change
    change_column(:users, :description, :string)
  end
end
