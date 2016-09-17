Book.destroy_all

Book.create(:title =>'Gone with the Wind',:image => 'https://upload.wikimedia.org/wikipedia/en/6/6b/Gone_with_the_Wind_cover.jpg',:published_year => 1999, :rating => 4,:reviews_count => 14533,:author_name => 'Margaret Mitchell', :read => true , :like_to_read => false , :genre => 'Historical Drama', :language => 'English' ,:isbn => 9780446365383 )

Author.destroy_all

Author.create(:name => 'Margaret Mitchell',:dob =>'1900/11/08' , :image => 'Margaret_Mitchell_NYWTS.jpg' , :nationality => 'American', :styles => 'Romance novel, Historical fiction')
