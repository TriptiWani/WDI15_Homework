# Calculator
# Explanation
#
# You will be building a calculator.
#A calculator can perform multiple arithmetic operations.
#Your function should allow the user to choose which operation is expected,
#enter in the values to perform the operation on, and ultimately view the result.
# Specification:
#
# A user should be given a menu of operations
# A user should be able to choose from the menu
# A user should be able to enter numbers to perform the operation on
# A user should be shown the result
# This process should continue until the user selects a quit option from the menu
# Phase 1
#
# Calculator functionality
# Calculator should be able to do basic arithmetic (+,-, *, /)
# Phase 2
#
# Advanced Calculator functionality
# Calculator should be able to do basic arithmetic (exponents, square roots)



def prompt(message)
  print message
  gets.chomp # implicit return
end
## demo
#name = prompt "what is your name"

def menu
  puts "a) - addition"
  puts "b) - substraction"
  puts "c) - multiplication"
  puts "d) - division"
  puts "e) - Exponents"
  puts "f) - Square Root"
  puts "g) - Mortgage calculation"
  puts "h) - BMI Calculation"
  puts "i) - Trip Calculation"
  puts "q) - quit"
  prompt "Enter your choice: "
end

def add()
  a = prompt "Enter first number : "
  b = prompt "Enter second number : "
   a.to_i + b.to_i
end

def subtract()
  a = prompt "Enter first number: "
  b = prompt "Enter second number: "
  a.to_i - b.to_i
end

def multiply()
  a = prompt "Enter first number: "
  b = prompt "Enter second number: "
  a.to_i * b.to_i
end

def divide()
  a = prompt "Enter first number: "
  b = prompt "Enter second number: "
  a.to_i / b.to_i
end

def exponents
  a = (prompt "Enter the base number : ").to_i
  b = (prompt "Enter the exponent number : ").to_i
    a**b
end

def square_root
  a = (prompt "Enter first number: ").to_i
  #a**(0.5)
  Math.sqrt(a)
end

#Mortgage Calculator

#Calculate the monthly required payment given the other variables as input (look up the necessary variables)
#c =  {r*P(1+r)^N}/{((1+r)^N)-1}.
def mortgage_calc
  #monthly interest rate r=(6.5/12)/100
  #principal amount
  #number of monthly payments or loan term N=30*12=360,
  a = (prompt "Enter the monthly interest rate: ").to_f
  p = (prompt "Enter the principal amount: ").to_f
  b = (prompt "Enter the loan term :").to_i

  r = (a / 12)/100
  n = b * 12
  monthly_payment = ((r * p)*(( 1+r)**n) )/(((1+r)**n)-1)
  return monthly_payment
end

#BMI Calculator
#Calculate the body mass index (BMI) for an individual, given their height and weight
#BMI = x KG / (y M * y M)
#x=bodyweight in KG
#y=height in m

def bmi_calc
  height = (prompt "Enter your height in m: ").to_f
  weight = (prompt "Enter your weight in kg : ").to_f
  return weight / (height * height)
end

#Trip Calculator

# Calculate a trip time and cost given inputs for
#
# distance
# miles per gallon
# price per gallon
# speed in miles per hour
def trip_calc
  distance = (prompt "Enter distance covered in miles: ").to_f
  mile_per_gallon = (prompt "Enter miles per gallon: ").to_f
  price_per_gallon = (prompt "Enter price per gallon: ").to_f
  speed = (prompt "Enter speed in miles per hour: ").to_f

  trip_time = distance / speed
  puts "Trip time is : #{trip_time}"

  trip_cost = (distance / mile_per_gallon) * price_per_gallon
  puts "Trip cost is : #{trip_cost}"

end


menu_selection = menu
#puts "Your choice : #{menu_selection}"
until menu_selection == 'q'
  case menu_selection
  when 'a'
     puts add()
  when 'b'
    puts subtract()
  when 'c'
    puts multiply()
  when 'd'
    puts divide()
  when 'e'
    puts exponents()
  when 'f'
    puts square_root()
  when 'g'
    puts mortgage_calc()
  when 'h'
    puts bmi_calc()
  when 'i'
    trip_calc()
  else
    puts "Invalid selection, idiot"
  end

  menu_selection = menu
end


puts "Thank you for using this crappy calculator"
