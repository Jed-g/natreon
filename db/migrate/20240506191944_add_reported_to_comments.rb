class AddReportedToComments < ActiveRecord::Migration[6.0]
  def change
    add_column :comments, :reported, :boolean, default: false
  end
end
