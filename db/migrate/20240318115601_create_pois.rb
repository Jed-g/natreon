class CreatePois < ActiveRecord::Migration[7.0]
  def change
    create_table :pois do |t|
      t.string :name
      t.text :description
      t.string :location
      t.text :features
      t.integer :likes, default: 0
      t.float :latitude
      t.float :longitude

      t.timestamps
    end
  end
end
