# frozen_string_literal: true

class AddSessionsTable < ActiveRecord::Migration[7.0]
  def change
    create_table :sessions, force: true do |t|
      t.string :session_id, null: false
      t.text :data
      t.timestamps
    end

    add_index :sessions, :session_id, unique: true
    add_index :sessions, :updated_at
  end
end
