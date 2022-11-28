import React, { useState, useEffect } from "react";
import { ReactDOM } from "react";
import "../css/Search.css";
import Header from "./Header";
import restaurant from "../dummy/restaurant.json";
import {Link} from "react-router-dom";
import SimpleInfo1 from "./SimpleInfo1";

const Search = () => {
    const [searchRes, setSearchRes] = useState("");
    const [searchResult, setSearchResult] = useState("");
    const [searchTest, setSearchTest] = useState("");

    var search = null;
    var name = null;
    
    
    useEffect( () => {
        search = restaurant.list.find((r) => (r.rastaurant) === searchRes);
        console.log(searchRes)
        console.log(search);
    }, [searchRes]);
    
    const searchDB = () => {
        console.log("검색");
        if(search != null){
            name = restaurant.list.find((r) => (r.rastaurant) ===  searchRes)
            console.log(name.rastaurant);
            setSearchResult(name.rastaurant);
            setSearchTest(<SimpleInfo1 id="user1" restaurant={name.rastaurant}/>);
        }
        else{
            setSearchResult("검색 결과가 없습니다.");
            setSearchTest(<div style={{width:"100px"}}></div>);
        }

    };
    

    return(
        <>
        <Header />
        <div class="entireSearch">
            <div style={{ padding : "20px", margin:"30px", borderRadius:"30px", textAlign:"center"}}>
                <input class="input" type="text" name="search" value={searchRes} placeholder="검색할 맛집을 입력하세요."
                onChange={(e)=>{ setSearchRes(e.target.value); }}></input>
                
                <button class="submit" type="submit" onClick={searchDB}>검색</button>
            </div>
            <div class="result" id="result">
                <p style={{fontFamily:"1", margin:"0 auto", marginTop:"30px", marginBottom:"30px", width:"300px", padding:"20px", border:"3px solid blue", textAlign:"center", borderRadius:"30px"}}>{searchResult}</p>
                <div class="success">{searchTest}</div>
            </div>
        </div>
        </>
    );
}

export default Search;