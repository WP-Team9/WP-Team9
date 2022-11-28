import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import userList from '../dummy/user.json';
import '../css/MyPage.css';
import SimpleInfo1 from './SimpleInfo1';
import Header from './Header';

const MyPage = () => {
    
    const path = useLocation().pathname;
    const index = path.split('/');
    console.log("ID : " + index[2]);
    console.log("PW : " + index[3]);

    const error = ["Error"];
    
    const id = index[2];
    const pw = index[3];
    var like = null;
    var img = null;
    var r = null;
    var recent = null;

    const likes = userList.user.map((u) => {
        if(u.id === id && u.pw === pw)
            return like = u.like
        // 오류
    })

    
    const recents = userList.user.map((u) => {
        if(u.id === id && u.pw === pw)
            return recent = JSON.stringify(u.recent);
        // 오류
    })
    

    const profile = userList.user.find((u) => {
        if(u.id === id && u.pw === pw)
            return img=u.profile;
        // 오류
    })

    const addRecent = () => {
        
    }

    console.log("Like : " + like);
    console.log("프로필 : " + img);
    console.log("recent : " + recent);

    return(
        <>
        <Header />
        <div class="entire">
            <h3 style={{ textAlign: "center", marginBottom:"30px", fontSize:"50px"}}>마이페이지</h3>
            <div class="group1">
                <div class="img"><img src={process.env.PUBLIC_URL+img} style={{width : "100px", height:"100px"}}></img><span style={{paddingTop:"10px", fontSize:"30px", marginLeft:"20px"}}>{id}</span></div>
            </div>
            <p style={{marginLeft:"15px", fontWeight:"bold", textAlign:"center", fontSize:"20px", fontWeight:"bold"}}>최근 본 식당 List</p>
            <div class="likeRes">
                
                <div style={{display:"inline-block", boxSizing: "border-box", margin:"10px"}}><SimpleInfo1 id = {id} restaurant={like[0]}></SimpleInfo1></div>
                <div style={{display:"inline-block", boxSizing: "border-box", margin:"10px"}}><SimpleInfo1 id = {id} restaurant={like[1]}></SimpleInfo1></div>
                <div style={{display:"inline-block", boxSizing: "border-box", margin:"10px"}}><SimpleInfo1 id = {id} restaurant={like[2]}></SimpleInfo1></div>
                <div style={{display:"inline-block", boxSizing: "border-box", margin:"10px"}}><SimpleInfo1 id = {id} restaurant={like[3]}></SimpleInfo1></div>
            </div>
            <div class="bottom">
                <Link to={"/"}>
                    <button class="back">뒤로가기</button>
                </Link>
            </div>
        </div>
        </>
    );
}

export default MyPage;