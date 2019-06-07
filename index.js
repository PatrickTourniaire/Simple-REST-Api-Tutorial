let inpSymbol = document.getElementById("symbol");
let btnSubmit = document.getElementById("submit");

const baseUrl = 'https://api.iextrading.com/1.0';
const request = new XMLHttpRequest();

const getCompanyInformation = (symbol) => {
    const url = baseUrl + '/stock/' + symbol + '/company';
    request.open('GET', url, true);
    request.onload = function() {
        const data = JSON.parse(this.response);
        let el = `<p>${data['symbol']} | ${data['description']}</p>`;
        document.body.innerHTML += el;
    }
    
    request.send();
}

btnSubmit.onclick = () => { getCompanyInformation(inpSymbol.value.toLowerCase()) }