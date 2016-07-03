require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'sqlite3'

#Homepage
get '/' do
  erb :home
end

#Create
get '/heros/new' do
  erb :heros_new
end

post '/heros/add' do
  "Adding my heros"
  query = "INSERT INTO Marvel (character_name,human_name,actor_name,bio,super_powers,hero,linked_to,comic_image,character_image) values ('#{ params[:character_name]}' , '#{ params[:human_name]}' , '#{ params[:actor_name]}', '#{ params[:bio]}' , '#{ params[:super_powers]}' , #{ params[:hero]}, '#{ params[:linked_to]}', '#{ params[:comic_image]}' , '#{ params[:character_image]}');"
  # query
  query_db query

  redirect to'/heros'
end
#Read
get '/heros' do
  query = "SELECT * FROM Marvel;"
  @heros = query_db query

  erb :heros_index
end

get '/heros/:id/show' do
  query = "SELECT * FROM Marvel where id = '#{ params[:id]}';"
  @hero = query_db query
  @hero = @hero.first

  erb :heros_show
end

#Update

#fetch the details
get '/heros/:id/edit' do
  query = "SELECT * FROM Marvel where id = '#{ params[:id]}';"
  @hero = query_db query
  @hero = @hero.first

  erb :heros_edit

end

# Update the new values after fecthing it
post '/heros/:id/update' do
  query = "UPDATE Marvel SET character_name='#{ params[:character_name]}' , human_name='#{params[:human_name]}' , actor_name = '#{ params[:actor_name]}' , bio = '#{ params[:bio]}' , super_powers = '#{params[:super_powers]}' , hero = #{ params[:hero]} , linked_to = '#{ params[:linked_to]}' , comic_image = '#{ params[:comic_image]}' , character_image = '#{params[:character_image]}' WHERE id=#{ params[:id]};"
  query_db query

  redirect to'/heros/'+params[:id]+'/show'
end

#Delete
get '/heros/:id/delete' do
  "Delete page is here"
  query = "DELETE FROM Marvel where id='#{params[:id]}';"
  query_db query

  redirect to'/heros'
end


# DB query function
def query_db(sql)
  db = SQLite3::Database.new  'myHeros.db'
  db.results_as_hash = true

  puts sql
  result = db.execute sql
  db.close
  result
end
