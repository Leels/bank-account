//Business logic
function BankAccount(name, deposit, depositAmount, withdrawalAmount){
  this.name = name;
  this.deposit = deposit;
  this.depositAmount = depositAmount;
  this.withdrawalAmount = withdrawalAmount;
}

BankAccount.prototype.depositMore = function() {
  return this.deposit + this.depositAmount
}

BankAccount.prototype.withdraw = function() {
  return this.deposit - this.withdrawalAmount
}

$(document).ready(function(){
  $('#blanks form').submit(function(event){
    event.preventDefault();

    var nameInput = $('input#name').val();
    var depositInput = parseInt($('input#initial-deposit').val());
    var depositAmountInput = parseInt($('input#deposit-amount').val());
    var withdrawalAmountInput = parseInt($('input#withdraw-amount').val());
    var newBankAccount = new BankAccount(nameInput, depositInput, depositAmountInput, withdrawalAmountInput)

  });
});
