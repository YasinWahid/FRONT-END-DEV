// Variables
const salaryInput = document.getElementById('monthly-salary');
const salaryButton = document.getElementById('set-salary-btn');
const salaryDisplay = document.getElementById('salary-display');
const expenseNameInput = document.getElementById('expense-name');
const expenseAmountInput = document.getElementById('expense-amount');
const expenseCategoryInput = document.getElementById('expense-category');
const addExpenseButton = document.getElementById('add-expense-btn');
const expensesList = document.getElementById('expenses-list');
const totalExpensesDisplay = document.getElementById('total-expenses');
const remainingBalanceDisplay = document.getElementById('remaining-balance');
const categoryTotalsDisplay = document.getElementById('category-totals');
const clearExpensesButton = document.getElementById('clear-expenses-btn');

let monthlySalary = 0;
let totalExpenses = 0;
let categoryExpenses = {
  Transport: 0,
  Grocery: 0,
  Utilities: 0,
  Other: 0,
  Housing: 0,
  Food: 0,
  Education: 0,
  Healthcare: 0,
  Entertainment: 0,
  Clothing: 0,
  Insurance: 0
};

// Step 1: Set Monthly Salary
salaryInput.addEventListener('input', () => {
  if (salaryInput.value && salaryInput.value > 0) {
    salaryButton.disabled = false;
  } else {
    salaryButton.disabled = true;
  }
});

salaryButton.addEventListener('click', () => {
  const salary = parseFloat(salaryInput.value);
  if (salary && salary > 0) {
    monthlySalary = salary;
    salaryDisplay.textContent = `Your Monthly Salary: Rs.${monthlySalary}`;
    updateRemainingBalance(); // Update remaining balance after setting salary
    saveData();
  } else {
    salaryDisplay.textContent = 'Please enter a valid salary.';
  }
});

// Step 2 & 3: Add Expense and Calculate Totals
expenseNameInput.addEventListener('input', validateExpenseInputs);
expenseAmountInput.addEventListener('input', validateExpenseInputs);

function validateExpenseInputs() {
  const nameValid = expenseNameInput.value.trim() !== '';
  const amountValid = expenseAmountInput.value > 0;

  if (nameValid && amountValid) {
    addExpenseButton.disabled = false;
  } else {
    addExpenseButton.disabled = true;
  }
}

addExpenseButton.addEventListener('click', () => {
    const expenseName = expenseNameInput.value;
    const expenseAmount = parseFloat(expenseAmountInput.value);
    const expenseCategory = expenseCategoryInput.value;
  
    if (expenseName && expenseAmount && expenseAmount > 0) {
      // Create a new row for the table
      const tableRow = document.createElement('tr');
  
      // Create columns for each piece of data
      const nameCell = document.createElement('td');
      nameCell.textContent = expenseName;
  
      const amountCell = document.createElement('td');
      amountCell.textContent = `Rs.${expenseAmount.toFixed(2)}`;
  
      const categoryCell = document.createElement('td');
      categoryCell.textContent = expenseCategory;
  
      // Append the cells to the row
      tableRow.appendChild(nameCell);
      tableRow.appendChild(amountCell);
      tableRow.appendChild(categoryCell);
  
      // Append the row to the table body
      const tableBody = document.getElementById('expense-table').getElementsByTagName('tbody')[0];
      tableBody.appendChild(tableRow);
  
      // Update the category expenses
      categoryExpenses[expenseCategory] += expenseAmount;
  
      // Update Total Expenses
      totalExpenses += expenseAmount;
      totalExpensesDisplay.textContent = `Total Expenses: Rs.${totalExpenses}`;
  
      // Update Remaining Balance
      updateRemainingBalance();
  
      // Update Category Totals
      updateCategoryTotals();
  
      // Save data in localStorage
      saveData();
  
      // Clear Input Fields
      expenseNameInput.value = '';
      expenseAmountInput.value = '';
      expenseCategoryInput.value = 'Transport';
      addExpenseButton.disabled = true;
    } else {
      alert('Please enter valid expense details.');
    }
  });
  

// Step 4: Clear All Expenses
clearExpensesButton.addEventListener('click', () => {
  // Reset everything
  totalExpenses = 0;
  categoryExpenses = {
    Transport: 0,
    Grocery: 0,
    Utilities: 0,
    Other: 0,
    Housing: 0,
    Food: 0,
    Education: 0,
    Healthcare: 0,
    Entertainment: 0,
    Clothing: 0,
    Insurance: 0
  };

  // Clear the list of expenses
  expensesList.innerHTML = '<h3>Expenses:</h3><p>No expenses added yet.</p>';

  // Reset totals and category breakdown
  totalExpensesDisplay.textContent = `Total Expenses: Rs.0`;
  remainingBalanceDisplay.textContent = `Remaining Balance: Rs.0`;
  updateCategoryTotals();

  // Save data in localStorage
  saveData();
});

// Function to Update Remaining Balance
function updateRemainingBalance() {
  const remainingBalance = monthlySalary - totalExpenses;
  remainingBalanceDisplay.textContent = `Remaining Balance: Rs.${remainingBalance.toFixed(2)}`;
}

// Function to Update Category Totals
function updateCategoryTotals() {
  categoryTotalsDisplay.innerHTML = `
    <div>Transport: Rs.${categoryExpenses.Transport.toFixed(2)}</div>
    <div>Grocery: Rs.${categoryExpenses.Grocery.toFixed(2)}</div>
    <div>Utilities: Rs.${categoryExpenses.Utilities.toFixed(2)}</div>
    <div>Other: Rs.${categoryExpenses.Other.toFixed(2)}</div>
    <div>Housing: Rs.${categoryExpenses.Housing.toFixed(2)}</div>
    <div>Food: Rs.${categoryExpenses.Food.toFixed(2)}</div>
    <div>Education: Rs.${categoryExpenses.Education.toFixed(2)}</div>
    <div>Healthcare: Rs.${categoryExpenses.Healthcare.toFixed(2)}</div>
    <div>Entertainment: Rs.${categoryExpenses.Entertainment.toFixed(2)}</div>
    <div>Clothing: Rs.${categoryExpenses.Clothing.toFixed(2)}</div>
    <div>Insurance: Rs.${categoryExpenses.Insurance.toFixed(2)}</div>
  `;
}

// Function to Save Data in LocalStorage
function saveData() {
  const data = {
    salary: monthlySalary,
    expenses: categoryExpenses,
    totalExpenses: totalExpenses
  };
  localStorage.setItem('expenseTrackerData', JSON.stringify(data));
}

// Function to Load Data from LocalStorage
function loadData() {
  const savedData = localStorage.getItem('expenseTrackerData');
  if (savedData) {
    const data = JSON.parse(savedData);
    monthlySalary = data.salary;
    totalExpenses = data.totalExpenses;
    categoryExpenses = data.expenses;

    // Display the loaded data
    salaryDisplay.textContent = `Your Monthly Salary: Rs.${monthlySalary}`;
    totalExpensesDisplay.textContent = `Total Expenses: Rs.${totalExpenses}`;
    updateRemainingBalance();
    updateCategoryTotals();

    // Display expenses
    for (const category in categoryExpenses) {
      if (categoryExpenses[category] > 0) {
        const expenseItem = document.createElement('p');
        expenseItem.textContent = `${category} - Rs.${categoryExpenses[category].toFixed(2)}`;
        expensesList.appendChild(expenseItem);
      }
    }
  }
}

// Load saved data when the page loads
loadData();
