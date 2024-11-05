let dropdowns = document.querySelectorAll(".col select");
let btn = document.querySelector(".btn");
let fromCurr = document.querySelector(".from select");
let toCurr = document.querySelector(".to select");
let msg = document.querySelector(".result");

for (let select of dropdowns){
    for(currCode in countryList){
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if(select.name === "from" && currCode=== "USD"){
            newOption.selected = "selected";
        }else if(select.name === "to" && currCode=== "INR"){
            newOption.selected = "selected";
        }

        select.append(newOption);    
    }
}


 let  updateExcangeRate = async() => {
   
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;

    //console.log(fromCurr.value,toCurr.value);
    let URL = `https://v6.exchangerate-api.com/v6/ee38344cdaad919e1ac3e73c/latest/`+fromCurr.value;
    let response = await fetch(URL);
  
    let data = await response.json();
    //console.log(data);
    let rate = data.conversion_rates[toCurr.value];
    
    msg.innerText = "Converting....";
    let finalAmount = (amtVal * rate).toLocaleString();
     msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
    
}

btn.addEventListener('click', (evt) => { 
    evt.preventDefault();
    updateExcangeRate();

});

