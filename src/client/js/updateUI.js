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
        document.getElementById('resut-country').innerHTML = `${countryName} ${allData[0].name}`; 
        document.getElementById('resut-currency').innerHTML = `${currencyName} ${allData[0].money}`; 
        document.getElementById('resut-lenguage').innerHTML = `${lenguageName} ${allData[0].leng}`;
        if (allData[2].temp === "N/A"){
            document.getElementById('resut-temp').innerHTML = `${temperatur} ${allData[2].temp}`
        }else{
            document.getElementById('resut-temp').innerHTML = `${temperatur} ${allData[2].temp} ${Celsius}`;
        } 
    }catch(error){
        console.log("error", error)
    }
    document.getElementById('resut-time').innerHTML = `Time remaining for the trip: ${allData[4].time}`;
}

export {updateUI}
