class CreateImages < ActiveRecord::Migration[6.1]
  def change
    create_table :images, id: :uuid do |t|
      t.string :name
      t.string :description
      t.string :picture
      t.references :user, null: false, foreign_key: true, type: :uuid
      t.timestamps
    end
  end
end
