

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


//


document.addEventListener('DOMContentLoaded', function () {
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    let currentDate = new Date();
    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();

    const monthElement = document.getElementById('month-name');
    const daysElement = document.getElementById('days');

    function renderCalendar(month, year) {
        daysElement.innerHTML = '';

        const firstDay = new Date(year, month, 1).getDay();
        const lastDay = new Date(year, month + 1, 0).getDate();

        monthElement.innerText = `${monthNames[month]} ${year}`;

        // Add empty divs for days before the first day of the month
        for (let i = 0; i < firstDay; i++) {
            const emptyDiv = document.createElement('div');
            daysElement.appendChild(emptyDiv);
        }

        // Add days of the month
        for (let day = 1; day <= lastDay; day++) {
            const dayDiv = document.createElement('div');
            dayDiv.innerText = day;

            if (day === currentDate.getDate() && month === currentDate.getMonth() && year === currentDate.getFullYear()) {
                dayDiv.classList.add('today');
            }

            daysElement.appendChild(dayDiv);
        }
    }

    document.querySelector('.prev').addEventListener('click', function () {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        renderCalendar(currentMonth, currentYear);
    });

    document.querySelector('.next').addEventListener('click', function () {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        renderCalendar(currentMonth, currentYear);
    });

    renderCalendar(currentMonth, currentYear);
});
