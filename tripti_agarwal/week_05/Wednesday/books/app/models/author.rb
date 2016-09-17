# == Schema Information
#
# Table name: authors
#
#  id          :integer          not null, primary key
#  name        :string
#  dob         :date
#  image       :text
#  nationality :string
#  styles      :text
#

class Author < ActiveRecord::Base
  has_many :books
end
