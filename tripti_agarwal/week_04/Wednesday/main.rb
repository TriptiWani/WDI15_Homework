require 'pry'
require 'HTTParty'
require 'sinatra'
require 'sinatra/reloader'


get '/' do
  erb :home
end

get '/details/:id' do
   imdb_id = params[:id]
   url = "http://omdbapi.com/?i=#{ imdb_id }"
   @img_url  = (HTTParty.get(url))['Poster']
   @movie_title = (HTTParty.get(url))['Title']
   @year = (HTTParty.get(url))['Year']
   @type = (HTTParty.get(url))['Type']

  erb :details
end

get '/options' do
  @title = params[:title].upcase
  if @title.empty?
    redirect '/'
  else
    url = "http://omdbapi.com/?s=#{ @title }"
    @movie_info = (HTTParty.get(url))['Search']
    if @movie_info.nil?
      redirect '/'
    else
      if (@movie_info.count != 1)
        erb :options
      else
        url = "http://omdbapi.com/?t=#{ @title }"
        movie_details = HTTParty.get url
        @img_url  = movie_details['Poster']
        @movie_title = movie_details['Title']
        @year = movie_details['Year']
        @type = movie_details['Type']

        erb :details
      end
    end
  end

end
