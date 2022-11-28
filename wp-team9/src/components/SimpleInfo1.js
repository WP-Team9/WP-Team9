import React from "react";
import {
  Button,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  TextField,
  Typography,
} from "@material-ui/core";
import restaurant from "../dummy/restaurant.json";
import userList from "../dummy/user.json";
import { useLocation, Link } from 'react-router-dom';

const SimpleInfo1 = ( props ) => {
    console.log("id 전달 : " + props.id);
    console.log("가게 전달 " + props.restaurant);
    const id = props.id;
    const name = props.restaurant;
    console.log("name " + name);
    
    
    var about = null;
    const addr = restaurant.list.map((r) => {
        if((r.rastaurant) === name)
            return about = r;
    })
    console.log(about.rastaurant);
    
    const addRecent = () => {
        userList.user.map(u => {
            if(u.id === id){
                return new Promise((resolve, reject) =>{
                    let result;
                    try{
                        u.recent = ([...u.recent], name);
                    }catch(err){
                        reject(err);
                    }
                    resolve(result);
                })
            }
        })
    }

    return(
    <div style={{width:"250px", height:"200px", textAlign:"center"}}>
    <Card elevation={5}>
        <CardHeader title={name} />
        <CardContent>
            <Typography variant="body1" component="p">
                <img src={process.env.PUBLIC_URL+about.rImg} style={{width:"200px", height:"150px", marginLeft:"5px"}}/> <br />
            </Typography>
        </CardContent>
        <CardActions>
            <Link to = {"/introduction/"+id+"/"+name}>
            <button onClick={addRecent} style={{backgroundColor:"pink",borderRadius:"20px", padding:"10px", marginLeft:"70px", display:"block"}}>
                가게 상세보기
            </button>
            </Link>
        </CardActions>
    </Card>
    </div>
    );
}

export default SimpleInfo1;