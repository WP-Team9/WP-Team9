import React from "react";
import "../css/Time.css";

const Time = ( props ) => {
    const about = props.about;
    const time = props.time;

    console.log("전달 : " + about + " & " + time);

    return(
        <div class="aboutTimeContents">
            <p class="clock">{about}</p><p>{time}</p>
        </div>              
    ); 
}

export default Time;