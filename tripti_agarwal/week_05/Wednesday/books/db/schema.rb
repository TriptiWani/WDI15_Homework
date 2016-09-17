# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160707074922) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "authors", force: :cascade do |t|
    t.string "name"
    t.date   "dob"
    t.text   "image"
    t.string "nationality"
    t.text   "styles"
  end

  create_table "books", force: :cascade do |t|
    t.string  "title"
    t.text    "image"
    t.integer "published_year"
    t.integer "rating"
    t.integer "reviews_count"
    t.string  "author_name"
    t.text    "synopsis"
    t.boolean "read"
    t.boolean "like_to_read"
    t.string  "genre"
    t.string  "language"
    t.string  "isbn"
    t.integer "author_id"
  end

end
