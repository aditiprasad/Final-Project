class CreateSpices < ActiveRecord::Migration
  def change
    create_table :spices do |t|
      t.string :name 
      t.string :image
      t.string :description
      t.string :hint

      t.timestamps null: false
    end
  end
end
