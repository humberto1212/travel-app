const countryName = "Country:"
const currencyName = "Currency:"
const lenguageName = "Lenguage:"
const Celsius = "°C"
const temperatur = "The weather:"

const updateUI = async () => {
    const request = await fetch('http://localhost:8081/response');
    try{
        const allData = await request.json(); 
        const imgSrc = allData[1].webformatURL

        document.getElementById('img-Country').innerHTML = `<img class="img-result" alt="" src="${imgSrc}">`;
        document.getElementById('resut-country').innerHTML = `<li class="country">${countryName} ${allData[0].name}</li>`; 
        document.getElementById('resut-currency').innerHTML = `<li class="currency">${currencyName} ${allData[0].money}</li>`; 
        document.getElementById('resut-lenguage').innerHTML = `<li class="lenguage">${lenguageName} ${allData[0].leng}</li>`;
        if (allData[2].temp === "N/A"){
            document.getElementById('resut-temp').innerHTML = `<li class="temp">${temperatur} ${allData[2].temp}</li>`
        }else{
            document.getElementById('resut-temp').innerHTML = `<li class="temp">${temperatur} ${allData[2].temp} ${Celsius}</li>`;
        } 

        document.getElementById('resut-time').innerHTML = `in: ${allData[4].time}`;

    }catch(error){
        console.log("error", error)
    }
}

export {updateUI}
