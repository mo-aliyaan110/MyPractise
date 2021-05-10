const url = "https://api.currencyfreaks.com/latest?apikey=dffc0675950a466e95c579850072e488&"

var base = document.getElementById('base').value 
var your = document.getElementById('your').value 
var howmany = document.getElementById('howmany').value
var final;

fetch((`${url}${base}`), {method:'GET'})
.then((res) => res.json())
.then((data) =>{
    final = data.rates;
    final = final[your]*Number(howmany)
})
var result = `converted value of ${your}${base} is ${final}${howmany}`
document.getElementById('result').innerText = result;
