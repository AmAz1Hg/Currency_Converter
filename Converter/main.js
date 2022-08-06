const Rates = {};

const ElemUSD = document.querySelector('[data-value="USD"]');
const ElemEUR = document.querySelector('[data-value="EUR"]');
const ElemBRL = document.querySelector('[data-value="BRL"]');
const ElemDKK = document.querySelector('[data-value="DKK"]');
const ElemCNY = document.querySelector('[data-value="CNY"]');
const ElemGBP = document.querySelector('[data-value="GBP"]');
const ElemKZT = document.querySelector('[data-value="KZT"]');

const input = document.querySelector('#input');
const result = document.querySelector('#result');
const select = document.querySelector('#select');

GetCurrency(); 

async function GetCurrency () {
    const response = await fetch("https://www.cbr-xml-daily.ru/daily_json.js"); 
    const data = await response.json();
    const result = await data;
  
    // Получаем курс на данный момент для каждой валюты
    Rates.USD = result.Valute.USD;
    Rates.EUR = result.Valute.EUR;
    Rates.BRL = result.Valute.BRL;
    Rates.DKK = result.Valute.DKK;
    Rates.CNY = result.Valute.CNY;
    Rates.GBP = result.Valute.GBP;
    Rates.KZT = result.Valute.KZT;

    console.log(Rates);

    // Достаём курсы валют, оставляя 2 знака после запятой
    ElemUSD.textContent = Rates.USD.Value.toFixed(2);
    ElemEUR.textContent = Rates.EUR.Value.toFixed(2);
    ElemBRL.textContent = Rates.BRL.Value.toFixed(2);
    ElemDKK.textContent = Rates.DKK.Value.toFixed(2);
    ElemCNY.textContent = Rates.CNY.Value.toFixed(2);
    ElemGBP.textContent = Rates.GBP.Value.toFixed(2);
    ElemKZT.textContent = Rates.KZT.Value.toFixed(2);

    // Доллар 
    if (Rates.USD.Value > Rates.USD.Previous) {
        ElemUSD.classList.add('top');
    } else {
        ElemUSD.classList.add('bottom');
    }
    
    // Евро
    if (Rates.EUR.Value > Rates.EUR.Previous) {
        ElemEUR.classList.add('top');
    } else {
        ElemEUR.classList.add('bottom');
    }
    
    // Бразильский Реал
    if (Rates.BRL.Value > Rates.BRL.Previous) {
        ElemBRL.classList.add('top');
    } else {
        ElemBRL.classList.add('bottom');
    }

    // Датская Крона
    if (Rates.DKK.Value > Rates.DKK.Previous) {
        ElemDKK.classList.add('top');
    } else {
        ElemDKK.classList.add('bottom')
    }

    // Китайскйи Юань
    if (Rates.CNY.Value > Rates.CNY.Previous) {
        ElemCNY.classList.add('top');
    } else {
        ElemCNY.classList.add('bottom')
    }

    // Фунт Стерлингов
    if (Rates.GBP.Value > Rates.GBP.Previous) {
        ElemGBP.classList.add('top');
    } else {
        ElemGBP.classList.add('bottom')
    }

    // Казахстанский Тенге
    if (Rates.KZT.Value > Rates.KZT.Previous) {
        ElemKZT.classList.add('top')
    } else {
        ElemKZT.classList.add('bottom')
    }    
}

input.oninput = ConvValue
select.oninput = ConvValue

// Считаем выходную валюту
function ConvValue() {
            result.value = (parseFloat(input.value) / Rates[select.value].Value).toFixed(3)
    }
