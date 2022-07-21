import React from "react"; 

function TimeEmoji({date = "January 1, 1970", minutes}) { 
  
  const coffeeCup = "☕️";
  const bento = "🍱";

  if (minutes < 30) {
    let nearestFive = Math.round(minutes / 5) * 5; 
    let numOfCoffeeCups = nearestFive / 5; 
    return (<small>{date} · {coffeeCup.repeat(numOfCoffeeCups)} {minutes + `minute read`}</small>); 
  } else {
    let nearestTen = Math.round(minutes / 10) * 10; 
    let numofBentos = nearestTen / 10;
    return <small>{date} · {bento.repeat(numofBentos)} {minutes + `minute read`}</small>;
  }
} 

export default TimeEmoji;