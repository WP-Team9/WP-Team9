
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import restaurant from '../dummy/restaurant.json';
import userList from '../dummy/user.json';
import axios from 'axios';
import "../css/Introduction.css";
import SimpleMenu from './SimpleMenu';
import Header from './Header';
import Time from './Time';

const Introduction = () => {
    var path = useLocation().pathname;
    let navigate= useNavigate();
    console.log("주소 : " + decodeURI(path));
    const index = path.split('/');
    console.log("식당 : " + decodeURI(index[3]));

    const id = decodeURI(index[2]);
    const name = decodeURI(index[3]);
    var recent = null;
    
    
    const recents = userList.user.map((u) => {
        if(u.id === id)
            return
                if(recent != null)
                    recent = u.recent.join(", ")
        // 오류
    });
    

    console.log("최근 : " + recent)
    
    var address = null;
    var menu = null;
    var openTime = null;
    var closeTime = null;
    var breakTime = null;
    var dayOff = null;
    var tel = null;
    var lastOrder = null;

    var about = null;
    const addr = restaurant.list.map((r) => {
        if((r.rastaurant) === name)
            return about = r;
        // 오류
    })

    if(about != null){
        address = about.address;
        menu = () => {
            axios.get(about)
        }
        openTime = about.openTime;
        closeTime = about.closeTime;
        breakTime = () => {
            axios.get(about);
        }

        if(about.breakTime.start == null){
            breakTime.start = "없음"
        }
        else{
            breakTime.start = about.breakTime.start;
        }
        
        if(about.breakTime.end == null){
            breakTime.end = "없음"
        }
        else{
            breakTime.end = about.breakTime.end;
        }
        
        if(about.dayOff == null){
            dayOff = "연중무휴";
        }
        else
            dayOff = about.dayOff;
        tel = about.tel;

        lastOrder = () => {
            axios.get(about);
        }

        if(about.lastOrder.점심 == null){
            lastOrder.점심 = "없음"
        }
        else{
            lastOrder.점심 = about.lastOrder.점심;
        }
        
        if(about.lastOrder.저녁 == null){
            lastOrder.저녁 = "없음"
        }
        else{
            lastOrder.저녁 = about.lastOrder.저녁;
        }
    } 

    return (
        <>
        <Header />
        <div class="entire">
            <h3 style={{fontWeight:"bold", fontSize:"30px", textAlign:"center"}}>{name}</h3>
            <div style={{border: "5px solid skyBlue", padding : "20px", margin:"30px", borderRadius:"30px", textAlign:"center"}}>
                <p  style={{fontSize:"20px"}}><img src={process.env.PUBLIC_URL+"/image/map.png"} style={{marginRight:"10px"}}></img>  {address}</p>
                <p class="aboutIntro">MENU</p>
                <div class="border" style={{display: "inline-block"}}>
                <div class="aboutContents"> <SimpleMenu name={about.menu.name[0]} price={about.menu.price[0]} img={about.menu.img[0]}></SimpleMenu></div>
                <div class="aboutContents" > <SimpleMenu name={about.menu.name[1]} price={about.menu.price[1]} img={about.menu.img[1]}></SimpleMenu></div>
                <div class="aboutContents"> <SimpleMenu name={about.menu.name[2]} price={about.menu.price[2]} img={about.menu.img[2]}></SimpleMenu></div>
                <div class="aboutContents"> <SimpleMenu name={about.menu.name[3]} price={about.menu.price[3]} img={about.menu.img[3]}></SimpleMenu></div>
                </div>
                
                
                <div class="clockBack">
                    <p class="aboutIntro" style={{marginTop:"15px"}}>TIME</p>
                    <Time about="OPEN" time={openTime} ></Time>
                    <Time about="BREAK" time={breakTime.start + " ~ " + breakTime.end} ></Time>
                    <Time about="CLOSE" time={closeTime} ></Time>
                </div>                    
                <div>
                    <Time about="LAST ORDER - LAUNCH" time={lastOrder.점심} ></Time>
                    <Time about="LAST ORDER - DINNER" time={lastOrder.저녁} ></Time>
                </div>
                
               
                <p>휴무일 {dayOff}</p>
                <p>Tel {tel}</p>
            </div>
            <div class="bottom">
                <button class="back" onClick={() => navigate(-1)}>뒤로가기</button>
            </div>
        </div>
        </>
    );
}

export default Introduction;