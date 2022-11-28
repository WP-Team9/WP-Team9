import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import userList from '../dummy/user.json';
import '../css/MyPage.css';
import SimpleInfo1 from './SimpleInfo1';
import Header from './Header';

const MyPage = () => {
    
    const path = useLocation().pathname;
    const index = path.split('/');
    
    const id = index[2];
    const pw = index[3];
    
    var img = null;
    var day = null;
    var phone = null;

    const profile = userList.user.find((u) => {
        if(u.id === id && u.pw === pw)
            return img=u.profile;
        // 오류
    })

    const birth = userList.user.find((u) => {
        if(u.id === id && u.pw === pw)
            return day=u.birth;
        // 오류
    })

    const likes = userList.user.find((u) => {
        if(u.id === id)
            return phone = u.tel;
        // 오류
    })

    return(
        <>
        <Header />
        <div class="entire">
            <h3 style={{ textAlign: "center", paddingTop:"10px", marginBottom:"50px", fontSize:"50px"}}>마이페이지</h3>
            <div class="userInfo">
                <div>
                <img src={process.env.PUBLIC_URL+img} style={{width : "100px", height:"100px"}}></img>
                </div>
                <div class="group">
                <p class="userInfos">ID</p>
                <p>{id}</p>
                </div>
                <div class="group">
                <p class="userInfos">BIRTH</p>
                <span>{day}</span>
                </div>
                <div class="group">
                <p class="userInfos">TELL</p>
                <span>{phone}</span>
                </div>
            </div>
        </div>
        </>
    );
}

export default MyPage;