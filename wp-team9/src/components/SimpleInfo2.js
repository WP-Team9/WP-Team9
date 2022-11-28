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

const SimpleInfo2 = ( props ) => {
    console.log("가게 : " + props.name);
    console.log("이미지 " + props.img);
    const name = props.name;
    const img = props.img;

    const id = "user1";

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
    <div style={{width:"280px", height:"200px", textAlign:"center"}}>
    <Card elevation={5}>
        <CardHeader title={name} />
        <CardContent>
            <Typography variant="body1" component="p">
                <img src={process.env.PUBLIC_URL+img} style={{width:"200px", height:"150px", marginLeft:"5px"}}/> <br />
                
            </Typography>

        </CardContent>
        <CardActions>
            <Link to = {"/introduction/"+"1234"+"/"+name}>
            <button onClick={addRecent} style={{border: "0", backgroundColor:"lightBlue",borderRadius:"20px", padding:"10px", marginLeft:"85px", display:"block"}}>
                가게 상세보기
            </button>
            </Link>
        </CardActions>
    </Card>
    </div>
    );
}

export default SimpleInfo2;