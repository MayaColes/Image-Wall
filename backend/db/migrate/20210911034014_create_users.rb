class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users, id: :uuid do |t|
      t.string :username
      t.string :encrypted_password, null: false, default: ""
      t.timestamps
    end
  end
end
