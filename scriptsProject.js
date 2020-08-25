'use strict'

let money, time;

function start(){
    money = +prompt('Ваш бюджет на месяц?', '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
    
    //с помощью цикла утверждаем что
    //isNan определяет что введено в запрос число или не число
    //"" определяет что строка не может быть пустой
    //null определяет что кнопка отмена не может быть нажата
    while(isNaN(money) || money == "" || money == null){
        money = +prompt('Ваш бюджет на месяц?', '');
    }
}
start();



let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};


function chooseExpenses(){
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
    }else{
        i = i - 1;
        }
    }   
}
chooseExpenses();

//Расчет дневного бюджета
function detectDayBudget(){
    appData.moneyPerDay = (appData.budget / 30).toFixed(1);
    alert("Бюджет на 1 день составляет" + appData.moneyPerDay + "руб.");
}
detectDayBudget();


function detectLevel(){
//выведем достаток человека (числа взяты рандомные)
    if(appData.moneyPerDay < 100){
        console.log('Минимальный уровень достатка');
    }
    else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
        console.log('Средний уровень достатка');
    }
    else if(appData.moneyPerDay > 2000){
        console.log('Высокий уровень достатка');
    }else {
        console.log('Произошла ошибка');
    }
}


//расчет накопления с депозита
function checkSavings(){
    if(appData.savings == true){
        let save = +prompt('Какова сумма накоплений?'),
            percent = +prompt('Под какой процент?');

            appData.monthIncome = save/100/12*percent;
            alert("доход с вашего депозита:" + appData.monthIncome);
    }
}
checkSavings();


//Не обязательные расходы
function chooseOptExpenses(){
    for (let i = 1; i <= 3; i++);
    let questionOptExpenses = prompt('Статья необязательных расходов?');
    appData.optionalExpenses[i] = questionOptExpenses;
    console.log(appData.optionalExpenses);
}
chooseOptExpenses()