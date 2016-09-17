class CreateBooks < ActiveRecord::Migration
  def change
    create_table :books do |t|
      t.string :title
      t.text :image
      t.integer :published_year
      t.integer :rating
      t.integer :reviews_count
      t.string :author_name
      t.text :synopsis
      t.boolean :read
      t.boolean :like_to_read
      t.string :genre
      t.string :language
      t.string :isbn

    end
  end
end
