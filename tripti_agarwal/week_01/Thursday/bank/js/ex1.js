/*
JavaScript Bank
In this homework, you'll create a basic bank in Javascript.
The bank has many accounts and the following capabilities that you need to write.

Bank


There is no need to write a user interface.
 Make sure functions return values -- you may also have your functions console.log() values to help you see your code working.

You should write a basic story through a series of JavaScript commands that shows
 that the methods do indeed work as expected:
 add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.
*/
// There is only one bank. This bank has an array of accounts.
/*
Accounts

Accounts have a current balance and owner's name.
*/

var acc1 = {
  name: 'Tripti',
  balance: 40
};
var acc2 = {
  name: 'Ben',
  balance: 100
};
var acc3 = {
  name: 'Jack',
  balance: 450
};
// The bank has many accounts. Accounts should be objects that all share a set of common functionality.

var bank = [acc1,acc2,acc3];

//  It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts.

var addAccount = function ( n, b ) {
  var newAcc = {
    name : n,
    balance : b
  }
  bank.push(newAcc);
  return 'New account for ' + n + ' added to the Bank';
}


//The bank needs a method that will return the total sum of money in the accounts.
var totalMoney = function ( bank ) {
  var bankTotal = 0;
  for (var i = 0; i < bank.length; i++) {
    bankTotal+= (bank[i].balance);
  }
  return bankTotal;
}
var totalSumInBank = totalMoney(bank);

//  You should be able to deposit or withdraw from an account to change the balance.

var deposits = function ( AccName, amount) {
var flag =0;
  //check if accname is present
  for (var i = 0; i < bank.length; i++) {
    if ( AccName === bank[i].name) {
      bank[i].balance+= amount;
      flag = 1;
      //return
      break;
    }  else {
      flag = 2;
      break;
    }
  }


  if (flag === 1) {
    console.log('Credited to'+ AccName + '  amount ' + amount);
    return flag;
  } else{
    console.log('No acc with '+AccName+ ' found');
    return flag;
  }

}

var withdraw = function ( AccName, amount) {
var flag =0;
  //check if accname is present
  for (var i = 0; i < bank.length; i++) {
    if ( AccName === bank[i].name) {
      if (bank[i].balance >= amount) {
        bank[i].balance-= amount;
        flag = 1;
        break;
      } else {
        flag = 2;
        break;

      }
    }
  }
  if (flag === 1) {
    console.log('Debitted from '+ AccName + ' account, amount ' + amount);
    return flag;
  } else if ( flag === 2) {
    console.log( AccName + ' You have insufficient balance');
    return flag;
  }
  else{
    console.log('No acc with name '+AccName+ ' found');
    return flag;
  }

}


var transferMoney = function ( from , to , amount ) {
  if( from === to) {
    message = 'Cannot transfer to your own account';
  } else {
    var withdrawFlag = withdraw(from, amount);
    //console.log(withdrawFlag);
    if ( withdrawFlag === 1) {
      var depositFlag = deposits(to, amount );
      //console.log(depositFlag);
      if  ( depositFlag === 1) {
        message = 'Successfully transferred '+ amount + ' to ' + to + ' from ' + from;
      }
    } else  {
      message = 'Cannot transfer '+ amount + ' to ' + to + ' from ' + from;
    }
  }
  return message;
}

/* var withdrawMoney = function ( n , a ) {
    for (var i = 0; i < bank.length; i++) {
      if ( n === bank[i].name) {
        // console.log(bank[i].balance);
        if (bank[i].balance >= a) {
          bank[i].balance-= a;
          // console.log(bank[i].name);
          // console.log(bank[i].balance);
          flag = 1;
        } else {
          flag = 2;
          //return 'Denied! Your current balance is less than withdraw amount';
        }
        return flag;
    }
  }
}
console.log(withdrawMoney('Tripti',10));

var depositMoney = function ( n , a ) {
  var flag =0;
    for (var i = 0; i < bank.length; i++) {
      //console.log(n === bank[i].name);
      if ( n === bank[i].name) {
        bank[i].balance+= a;
        flag = 1;
        console.log(bank[i].balance);
     } else {
    console.log('No account by this name');
    flag = 2;
    }
    return flag;
  }
}
console.log(depositMoney('Tripti',10));
*/
