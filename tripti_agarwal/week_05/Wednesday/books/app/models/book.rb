# == Schema Information
#
# Table name: books
#
#  id             :integer          not null, primary key
#  title          :string
#  image          :text
#  published_year :integer
#  rating         :integer
#  reviews_count  :integer
#  author_name    :string
#  synopsis       :text
#  read           :boolean
#  like_to_read   :boolean
#  genre          :string
#  language       :string
#  isbn           :string
#

class Book < ActiveRecord::Base
  belongs_to :author
end
