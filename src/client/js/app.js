import {updateUI} from './updateUI.js'

 const postData = async (url = '', data = {})=>{
      const response = await fetch(url, {
      method: 'POST', 
      credentials: 'same-origin',
      headers: {
          'Content-Type': 'application/json',
      },
     // Body data type must match "Content-Type" header        
      body: JSON.stringify(data), 

    });
      try {
        const newData = await response.json();
        console.log(newData);
        return newData;
      }catch(error) {
      console.log("error", error);
      }
    }
    
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('generate').addEventListener('click', action);
});

const action = () => {
    // check what input was entered into the location field
    let newLocation = document.getElementById('location').value;
    const myDate = document.getElementById('date').value;

    postData('http://localhost:8081/travel', {location: newLocation, date: myDate})
    .then(() =>{
        updateUI() 
   }) 
}

export {action}
