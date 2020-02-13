class CreateNotes < ActiveRecord::Migration[6.0]
  def change
    create_table :notes do |t|
      t.references :user
      t.text :data

      t.timestamps
    end
  end
end
