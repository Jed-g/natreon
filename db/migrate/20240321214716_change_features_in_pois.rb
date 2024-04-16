class ChangeFeaturesInPois < ActiveRecord::Migration[7.0]
    def change
      change_column :pois, :features, :string, array: true, default: [], using: "(string_to_array(features, ','))"
    end
end
  