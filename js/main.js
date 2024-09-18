// Bar Action 
document.addEventListener('DOMContentLoaded', () => {
    const incomeDiv = document.getElementById('incomeDiv');
    const expenseDiv = document.getElementById('expenseDiv');
    const transactionsDiv = document.getElementById('transactionsDiv');

    const incomeBtn = document.getElementById('incomeBtn');
    const expenseBtn = document.getElementById('expenseBtn');
    const transactionsBtn = document.getElementById('transactionsBtn');

    function showDiv(divToShow, btn) {
        incomeDiv.classList.add('hidden');
        expenseDiv.classList.add('hidden');
        transactionsDiv.classList.add('hidden');
        divToShow.classList.remove('hidden');
        incomeBtn.classList.remove('Component');
        expenseBtn.classList.remove('Component');
        transactionsBtn.classList.remove('Component');
        btn.classList.add('Component');
    }

    incomeBtn.addEventListener('click', () => showDiv(incomeDiv, incomeBtn));
    expenseBtn.addEventListener('click', () => showDiv(expenseDiv, expenseBtn));
    transactionsBtn.addEventListener('click', () => showDiv(transactionsDiv, transactionsBtn));

    showDiv(incomeDiv);
});


// Add income 
document.getElementById('transactionForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const date = document.getElementById('date').value;

    const incomeData = {
        type: 'income',
        name: name,
        amount: amount,
        date: date
    };

    const transactions = JSON.parse(localStorage.getItem('transactions')) || [];
    
    transactions.push(incomeData);

    localStorage.setItem('transactions', JSON.stringify(transactions));

    updateBalanceAndIncome(amount);

    alert('Income Added');
    document.getElementById('transactionForm').reset(); 
});

function updateBalanceAndIncome(incomeAmount) {
    const currentIncome = parseFloat(document.getElementById('income').textContent.replace('₹ ', '')) || 0;
    const currentBalance = parseFloat(document.getElementById('balance').textContent.replace('₹ ', '')) || 0;

    const newIncome = currentIncome + incomeAmount;
    const newBalance = currentBalance + incomeAmount;

    document.getElementById('income').textContent = `₹ ${newIncome.toFixed(2)}`;
    document.getElementById('balance').textContent = `₹ ${newBalance.toFixed(2)}`;
}

document.getElementById('transactionForm1').addEventListener('submit', function(e){
    e.preventDefault();

    const name1 = document.getElementById('name1').value;
    const amount1 = parseFloat(document.getElementById('amount1').value);
    const date1 = document.getElementById('date1').value;

    const expenseData = {
        type: 'expense',
        name: name1,
        amount: amount1,
        date: date1
    };

    const transactions = JSON.parse(localStorage.getItem('transactions')) || [];
    
    transactions.push(expenseData);

    localStorage.setItem('transactions', JSON.stringify(transactions));

    updateBalanceAndExpense(amount1);

    alert("Expense Added");
    document.getElementById('transactionForm1').reset();
});

function updateBalanceAndExpense(amount) {
    const currentExpense = parseFloat(document.getElementById('expense').textContent.replace('₹ ', '')) || 0;
    const currentBalance = parseFloat(document.getElementById('balance').textContent.replace('₹ ', '')) || 0;

    const newExpense = currentExpense + amount;
    const newBalance = currentBalance - amount;

    document.getElementById('expense').textContent = `₹ ${newExpense.toFixed(2)}`;
    document.getElementById('balance').textContent = `₹ ${newBalance.toFixed(2)}`;
}

let totalIncome = 0;
let totalExpense = 0;
let totalBalance = 0;

function initialize() {
    const transactions = JSON.parse(localStorage.getItem('transactions')) || [];
    
    transactions.forEach(transaction => {
        if (transaction.type === 'income') {
            totalIncome += transaction.amount;
        } else if (transaction.type === 'expense') {
            totalExpense += transaction.amount;
        }
    });

    totalBalance = totalIncome - totalExpense;

    document.getElementById('income').textContent = `₹ ${totalIncome.toFixed(2)}`;
    document.getElementById('expense').textContent = `₹ ${totalExpense.toFixed(2)}`;
    document.getElementById('balance').textContent = `₹ ${totalBalance.toFixed(2)}`;

    initializeChart();
}

function initializeChart() {
    const ctx = document.getElementById('myChart');
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Balance', 'Expense'],
            datasets: [{
                label: 'Financial Overview',
                data: [totalBalance, totalExpense], 
                backgroundColor: ['#4CAF50', '#FF5722', '#03A9F4'], 
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
            }
        }
    });
}



window.onload = initialize;


function displayTransactions() {
    const transactions = JSON.parse(localStorage.getItem('transactions')) || [];
    const transactionList = document.getElementById('transactionList');
    transactionList.innerHTML = ''; 

    transactions.forEach((transaction, index) => {
       
        const transactionItem = document.createElement('div');
        transactionItem.classList.add('transaction-item');

        transactionItem.innerHTML = `
            <div class="transDetail" >
                <div>${transaction.name || 'Transaction ' + (index + 1)}</div>
                <div>${transaction.date}</div>
            </div>
            <span class="${transaction.type === 'income' ? 'income' : 'expense'}">
                ${transaction.type === 'income' ? '+' : '-'} ₹${transaction.amount.toFixed(2)}
            </span>
        `;

      
        transactionList.appendChild(transactionItem);
    });
}

window.onload = function() {
    initialize(); 
    displayTransactions(); 
};
