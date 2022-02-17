// ------- Error handeling ---------//

const expensesValid = document.getElementById('expenses-error');
expensesValid.style.display = "none";

const expensesAddError = document.getElementById('expenses-add-error');
expensesAddError.style.display = "none";

const balanceError = document.getElementById('balance-error');
balanceError.style.display = "none";

const percentError = document.getElementById('percent-error');
percentError.style.display = "none";

const savingAmountError = document.getElementById('saving-amount-error');
savingAmountError.style.display = "none";

// ------------------------------------ //

// function to get Value
function getValue(inputId) {
     const text = document.getElementById(inputId).value;
     const value = parseFloat(text);
     return value;
};


// calculate button's event Handlder and errorGiving using conditions
document.getElementById('calculate-button').addEventListener('click', function () {
     const food = getValue('food-input');
     const rent = getValue('rent-input');
     const clothes = getValue('clothes-input');
     const income = getValue('income-input');
     let expensesText = document.getElementById('expenses-total');
     let balance = document.getElementById('balance-total');
     const totalExpenses = food + rent + clothes;
     const leftBalance = income - totalExpenses;

     if (food < 0){
          expensesValid.style.display = "block";
          balanceError.style.display = "none";
          expensesAddError.style.display = "none";
          expensesText.innerText = 0;
          balance.innerText = 0;
     }
     else if(rent < 0){
          expensesValid.style.display = "block";
          balanceError.style.display = "none";
          expensesAddError.style.display = "none";
          expensesText.innerText = 0;
          balance.innerText = 0;
     }
     else if(clothes < 0){
          expensesValid.style.display = "block";
          balanceError.style.display = "none";
          expensesAddError.style.display = "none";
          expensesText.innerText = 0;
          balance.innerText = 0;
     }
     else if(income < 0){
          balanceError.style.display = "block";
          expensesValid.style.display = "none";
          expensesAddError.style.display = "none";
          expensesText.innerText = 0;
          balance.innerText = 0;
     }
     else if(totalExpenses > income){
          expensesAddError.style.display = "block";
          balanceError.style.display = "none";
          expensesValid.style.display = "none";
          expensesText.innerText = 0;
          balance.innerText = 0;
     }
     else{
          expensesText.innerText = totalExpenses;
          balance.innerText = leftBalance;
          expensesValid.style.display = "none";
          balanceError.style.display = "none";
          expensesAddError.style.display = "none";
     }

});

