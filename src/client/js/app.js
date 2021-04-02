
document.getElementById('generate').addEventListener('click', action);

function action() {
    let newValue = document.getElementById('location').value;
  
    document.getElementById('results').innerHTML = newValue;
    
}

export {action};