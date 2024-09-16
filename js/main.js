

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

