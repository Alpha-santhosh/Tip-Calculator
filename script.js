/* 
🌟 APP: Tip Calculator

These are the 3 functions you must use 👇
=========================================
calculateBill()
increasePeople()
decreasePeople()

These functions are hard coded in the HTML. So, you can't change their names.

These are all the DIV ID's you're gonna need access to 👇
========================================================
#1 ID 👉 'billTotalInput' = User input for bill total
#2 ID 👉 'tipInput' = User input for tip
#3 ID 👉 'numberOfPeople' = Current number of people you're splitting the bill between
#4 ID 👉 'perPersonTotal' = Total dollar value owed per person
*/

// Get global access to all inputs / divs here (you'll need them later 😘)
// bill input, tip input, number of people div, and per person total div



// Get number of people from number of people div
const billamountinput = document.getElementById('billTotalInput');
const tipamountinput = document.getElementById('tipInput'); 
const perperson = document.getElementById('perPersonTotal');
const inital = document.getElementById('numberOfPeople');
let totalamount
// ** Calculate the total bill per person **
const calculateBill = () => {
    // get bill from user input & convert it into a number
    let amount = Number(billamountinput.value);
    // get the tip from user & convert it into a percentage (divide by 100)
    let tipamount = Number(tipamountinput.value)/100;
        // console.log("amount;",amount,"\ntip amount:",tipamount,"total amount:");
    totalamount = amount+(amount*tipamount);
    perperson.innerHTML = totalamount;
  
    // get the total tip amount
    
  
    // calculate the total (tip amount + bill)
    
  
    // calculate the per person total (total divided by number of people)
  
  
    // update the perPersonTotal on DOM & show it to user
  
  }
  
  // ** Splits the bill between more people **
  const increasePeople = () => {
    // increment the amount of people
    let num = Number(inital.innerText);
    if(num >= 1)
    {
        num = num+1;
    }
    inital.innerText = num;
    // let divide = Number(perperson.innerHTML);
    perperson.innerHTML = Number(totalamount/num).toFixed(2);
  
    // update the DOM with the new number of people
  
  
    // calculate the bill based on the new number of people
  
  }
  
  // ** Splits the bill between fewer people **
  const decreasePeople = () => {
    // guard clause
    // if amount is 1 or less simply return
    // (a.k.a you can't decrease the number of people to 0 or negative!)
    let num = Number(inital.innerText);
    if(num > 1)
    {
        num -=1;
    }
    inital.innerText = num;
    perperson.innerHTML = Number(totalamount/num).toFixed(2);
    
    // decrement the amount of people
  
  
    // update the DOM with the new number of people
  
  
    // calculate the bill based on the new number of people
  
  }