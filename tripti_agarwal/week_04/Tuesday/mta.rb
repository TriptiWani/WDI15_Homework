require 'pry'

# Title: MTA Lab
# Activity:
#
# Students should create a program that models a simple subway system.
#
# The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the total number of stops for the trip.
#
# There are 3 subway lines:
# The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
# The L line has the following stops: 8th, 6th, Union Square, 3rd, 1st
# The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square,  Astor Place.
# All 3 subway lines intersect at Union Square, but there are no other intersection points.
# For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.
# Hints:
#
# Don't worry about user input initially: get it working with hardcoded values first, and wire up the user interface once that's working
# Consider diagraming the lines by sketching out the subway lines and their stops and intersection.
# Make subway lines keys in a hash, while the values are an array of all the stops on each line.
# The key to the lab is to find the intersection of the lines at Union Square.
# Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)
# $ sign at begining

def subway
   {
  :N => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
  :L => ["8th", "6th", "Union Square", "3rd", "1st"],
  :'6' => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"],
  :intersection => ["Union Square"]
}
end

def route(line,fromStation,toStation)
  if (subway[line.to_sym].index(fromStation) < subway[line.to_sym].index(toStation))
    subway[line.to_sym][(subway[line.to_sym].index(fromStation) + 1)..(subway[line.to_sym].index(toStation))]
  elsif ( subway[line.to_sym].index(fromStation) > subway[line.to_sym].index(toStation))
     temp = subway[line.to_sym].reverse
   temp[(temp.index(fromStation) + 1) .. (temp.index(toStation))]
  end
end

def planTrip(fromLine,fromStation,toLine,toStation)
    subway
   intersectStation = subway[:intersection].first

   if subway.keys.include?(fromLine) && subway[fromLine.to_sym].include?(fromStation) && subway.keys.include?(toLine) && subway[toLine.to_sym].include?(toStation)
     if fromLine != toLine
       intersect_at_fromLine = subway[fromLine.to_sym].index(intersectStation)
       intersect_at_toLine = subway[toLine.to_sym].index(intersectStation)
       route_to_take1 = route(fromLine, fromStation,intersectStation)
       route_to_take2 = route(toLine, intersectStation , toStation)
       number_of_stops = route_to_take1.count + route_to_take2.count
       p "Route to travel from #{fromStation} on line #{fromLine} to #{toStation} on #{toLine} line"
       p "You must travel through the following stops on the #{fromLine} line: #{(route_to_take1)*','}"
       p "Change at #{intersectStation}"
       p "Your journey continues through the following stops: #{(route_to_take2)*','} on line #{toLine}"
       p "#{number_of_stops} stops in total."
     else
       route_to_take = route(fromLine, fromStation,toStation)
       number_of_stops = route_to_take1.count
       p "Route to travel from #{fromStation} to #{toStation} on #{toLine}"
       p route_to_take
       p "#{number_of_stops} stops in total."
     end
   end

end

def route_plan
  subway
  puts "Enter the starting line: "
  fromLine = gets.chomp.to_sym
  puts "Line #{fromLine} does not exist" unless subway.keys.include?(fromLine)

  puts "Enter the starting station: "
  fromStation = gets.chomp
  puts "Station #{fromStation} does not exist" unless subway[fromLine.to_sym].include?(fromStation)

  puts "Enter the destination line: "
  toLine = gets.chomp.to_sym
  puts "Line #{toLine} does not exist" unless subway.keys.include?(toLine)

  puts "Enter the destination station: "
  toStation = gets.chomp
  puts "Station #{toStation} does not exist" unless subway[toLine.to_sym].include?(toStation)

  planTrip(fromLine,fromStation,toLine,toStation)
end

route_plan
