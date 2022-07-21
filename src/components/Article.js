import React from "react"; 
import TimeEmoji from "./TimeEmoji";

function Article({title, date = "January 1, 1970", preview, minutes}) { 
  

  
  return (
    <article>
      <h3>{title}</h3> 
      <TimeEmoji 
        date={date} 
        minutes={minutes}
      />
      <p>{preview}</p>
    </article>
  );
}

export default Article;