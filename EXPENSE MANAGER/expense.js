const expenseBtn = document.querySelector('.tab1-exp');
const incomeBtn = document.querySelector('.tab2-inc');
const allBtn = document.querySelector('.tab3-all');

const expenseList = document.querySelector('#expense-list');
const incomeList = document.querySelector('#income-list');
const allList = document.querySelector('#all-list');

expenseBtn.addEventListener('click', function(){
    active(expenseBtn);
    inactive([incomeBtn, allBtn]);
    show(expenseList);
    hide([incomeList, allList]);
});

incomeBtn.addEventListener('click', function(){
    active(incomeBtn);
    inactive([expenseBtn, allBtn]);
    show(incomeList);
    hide([expenseList, allList]);
});

allBtn.addEventListener('click', function(){
    active(allBtn);
    inactive([incomeBtn, expenseBtn]);
    show(allList);
    hide([incomeList, expenseList]);
});

function active( el ) {
    el.classList.add("active");
}

function inactive( elArray ) {
    elArray.forEach(element => {
        element.classList.remove("active");
    });
}

function show( el ) {
    el.classList.remove("hide");
}

function inactive( elArray ) {
    elArray.forEach(element => {
        element.classList.add("hide");
    });
}
