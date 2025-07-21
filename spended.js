let balance = 0;
let income = 0;
let expense = 0;

function updateValues() {
    const desc = document.getElementById('text-type');
    const amounts = document.getElementById('num');
    const des = desc.value.trim();
    const amt = amounts.value.trim();
    const amount = Number(amt);

    if (des === '' || amt === '' || isNaN(amount)) {
        alert("Please enter valid description and amount");
        return;
    }

    const list = document.getElementById('list-type');

   
    const transaction = document.createElement('div');
    transaction.classList.add('transaction');
    if (amount < 0) transaction.classList.add('expense');

    
    const info = document.createElement('div');
    info.classList.add('transaction-info');
    info.innerText = `${des}  ${amount >= 0 ? '+$' : '-$'}${Math.abs(amount).toFixed(2)}`;

    
    const btn = document.createElement('button');
    btn.innerText = 'x';

   
    btn.onclick = () => {
        list.removeChild(transaction);
        if (amount >= 0) {
            income -= amount;
        } else {
            expense -= Math.abs(amount);
        }
        balance -= amount;
        updateUI();
    };

    transaction.appendChild(info);
    transaction.appendChild(btn);
    list.appendChild(transaction);

    
    if (amount >= 0) {
        income += amount;
    } else {
        expense += Math.abs(amount);
    }
    balance += amount;

    updateUI();
    desc.value = '';
    amounts.value = '';
}

function updateUI() {
    document.getElementById('Balance').textContent = `$${balance.toFixed(2)}`;
    document.getElementById('income').textContent = `+$${income.toFixed(2)}`;
    document.getElementById('expense').textContent = `-$${expense.toFixed(2)}`;
}

