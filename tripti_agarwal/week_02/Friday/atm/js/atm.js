//positive number check
//floats check
//Nan
//less balance toh diont withdraw anything, only throw msg
// any limit on number of digits


var $checkingAmount;
var $savingsAmount;
var savingsBalId = '#savings-balance'
var checkingBalId = '#checking-balance'

//This function checks the input
var checkAmountInput = function (input) {
  if ( isNaN(input)){
    alert('Please enter a number');
  } else if (input < 0) {
    alert('Please enter a positive number');
  } else if (input === '') {
    alert('Please enter a  number');
  } else if (input === 0) {
    alert('Please enter a number other than zero');
  } else if (!(input)) {
    alert('Please enter a number other than zero');
  } else  {
    input = parseFloat(parseFloat(input).toFixed(2));
    return input;
  }
}

// this function gets the balance of the account by its unique id, and parseFloat to 2 digits
var getBalanceById = function (id) {
  var balance = parseFloat(parseFloat($(id).html().replace('$','')).toFixed(2));
  return balance;
}

//this function is called to deposit the amount into checkings account
var checkingDeposit = function() {
  var $checkingBal = getBalanceById(checkingBalId);
  $checkingAmount = $('#checking-amount')[0].value;
  var newBal = deposit($checkingAmount,$checkingBal);
  if (newBal !== undefined){
    $('#checking-balance').html('$'+newBal);
  }
  balanceLowIndicator();
}

//this function is called to deposit the amount into savings account
var savingsDeposit = function() {
  var $savingsBal = getBalanceById(savingsBalId);

  $savingsAmount = $('#savings-amount')[0].value;
  var newBal = deposit($savingsAmount,$savingsBal);
  if (newBal !== undefined){
    $('#savings-balance').html('$'+newBal);
  }
  balanceLowIndicator();
}

// this is the generic deposit function called by both the accounts
var deposit = function(amount,balance) {
  var inputAmount = checkAmountInput(amount);
  amount = parseFloat(parseFloat(amount).toFixed(2));
  if ((inputAmount !== 0) && (balance !== undefined)){
    if (inputAmount) {
      balance+=inputAmount;
    }
  }
  return parseFloat(parseFloat(balance).toFixed(2));
}

//this function is called to withdraw the amount from checkings account
var checkingWithdraw = function() {
  var $checkingBal = getBalanceById(checkingBalId);
  var $savingsBal = getBalanceById(savingsBalId);
  $checkingAmount = $('#checking-amount')[0].value;
  if ( $checkingAmount > ($checkingBal + $savingsBal)){
    alert('You cannot withdraw more than your total balance');
  } else if ($checkingBal === 0) {
      var newBal = withdraw($checkingAmount,$savingsBal);
      if (newBal !== undefined){
        $('#savings-balance').html('$'+newBal);
      }
  } else if ( $checkingAmount > $checkingBal) {
      var $amountWithdrawFromChecking = $checkingBal;
      var $amountWithdrawFromSavings = $checkingAmount - $checkingBal;
      var newBalFromChecking = withdraw($amountWithdrawFromChecking,$checkingBal);
      if (newBalFromChecking !== undefined){
        $('#checking-balance').html('$'+ newBalFromChecking);
      }
      var newBalFromSavings = withdraw($amountWithdrawFromSavings,$savingsBal);
      if (newBalFromSavings !== undefined){
        $('#savings-balance').html('$'+newBalFromSavings);
      }
  } else {
      var newBal = withdraw($checkingAmount,$checkingBal);
      if (newBal !== undefined){
        $('#checking-balance').html('$'+newBal);
      }
  }
  balanceLowIndicator();

}

//this function is called to withdraw the amount from savings account
var savingsWithdraw = function() {
  var $checkingBal = getBalanceById(checkingBalId);
  var $savingsBal = getBalanceById(savingsBalId);
  $savingsAmount = $('#savings-amount')[0].value;
  if ( $savingsAmount > ($checkingBal + $savingsBal)){
    alert('You cannot withdraw more than your total balance');
  }
  else {
    if ($savingsBal === 0) {
      $('#savings-balance').css('background-color','red');
      var newBal = withdraw($savingsAmount,$checkingBal);
      if (newBal !== undefined){
          $('#checking-balance').html('$'+newBal);
      }
      if ( newBal === 0 ) {
        $('#checking-balance').css('background-color','red');
      }
    } else if ( $savingsAmount > $savingsBal) {
      var $amountWithdrawFromSavings = $savingsBal;
      var $amountWithdrawFromChecking = $savingsAmount - $savingsBal;
      var newBalFromSavings = withdraw($amountWithdrawFromSavings,$savingsBal);
      if (newBalFromSavings !== undefined){
          $('#savings-balance').html('$'+ newBalFromSavings);
      }
      var newBalFromChecking = withdraw($amountWithdrawFromChecking,$checkingBal);
      if (newBalFromChecking !== undefined){
        $('#checking-balance').html('$'+newBalFromChecking);
      }
    } else {
      var newBal = withdraw($savingsAmount,$savingsBal);
      if (newBal !== undefined){
          $('#savings-balance').html('$'+newBal);
      }
      if ( newBal === 0 ) {
        $('#savings-balance').css('background-color','red');
      }
    }
    balanceLowIndicator();
  }
}
// this function chsanges the background-color based on th acc balance
var balanceLowIndicator = function (){
  var $checkingBal = getBalanceById(checkingBalId);
  var $savingsBal = getBalanceById(savingsBalId);
  if ( $savingsBal === 0 ) {
    $('#savings-balance').css('background-color','red');
  } else{
    $('#savings-balance').css('background-color','#E3E3E3');
  }
  if ( $checkingBal === 0 ) {
    $('#checking-balance').css('background-color','red');
  } else{
    $('#checking-balance').css('background-color','#E3E3E3');
  }
}
var withdraw = function(amount, balance) {
  var inputAmount = checkAmountInput(amount);
  if ((inputAmount !== 0) && (balance !== undefined) && (inputAmount !== undefined)){
    if  (balance < inputAmount ) {
      alert('You cannot withdraw more than your balance');
    } else {
      balance-=inputAmount;
    }
    return balance;
  }
}

var $checkingDepositButton = $('#checking-deposit')[0];
var $checkingWithdrawButton = $('#checking-withdraw')[0];
var $savingsDepositButton = $('#savings-deposit')[0];
var $savingsWithdrawButton = $('#savings-withdraw')[0];


$checkingDepositButton.addEventListener('click',checkingDeposit);
$checkingDepositButton.addEventListener('keypress',checkingDeposit);
$checkingWithdrawButton.addEventListener('click',checkingWithdraw);
$checkingWithdrawButton.addEventListener('keypress',checkingWithdraw);
$savingsDepositButton.addEventListener('click',savingsDeposit);
$savingsWithdrawButton.addEventListener('click',savingsWithdraw);
