'use strict'


let money = +prompt('Ваш бюджет на месяц?', ''),
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

    //циклы для вывода значений
    for ( let i = 0; i < 2; i++){
        let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
            b = prompt ("Во сколько обойдется?", "");
            //условия для ввода данных в всплывающих окнах
            // 1. переменная a равна строке
            // 2. переменная a не равна null
            // 3. переменная b не равна null
            // 4. переменная a не равна пустой строке
            // 5. переменная b не равна пустой строке
            // 6. в строке переменной a можно ввести не более 50 символов
            if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && 
            a != "" && b != "" && a.length < 50) {
        console.log ("done");
        appData.expenses[a] = b;
    }

    };

    appData.moneyPerDay = appData.budget / 30;
    
    alert("ежедневный бюджет: " + appData.moneyPerDay);


    //выведем достаток человека (числа взяты рандомные)
    if(appData.moneyPerDay < 100){
        console.log('Минимальный уровень достатка');
    }
    else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
        console.log('Средний уровень достатка');
    }
    else if(appData.moneyPerDay > 2000){
        console.log('Высокий уровень достатка');
    } else {
        console.log('Произошла ошибка');
    };


    //выполнить дз
    //////////////git
