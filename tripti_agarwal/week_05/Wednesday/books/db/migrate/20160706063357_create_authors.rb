class CreateAuthors < ActiveRecord::Migration
  def change
    create_table :authors do |t|
      t.string :name
      t.date :dob
      t.text :image
      t.string :nationality
      t.text :styles
    end
  end
end
