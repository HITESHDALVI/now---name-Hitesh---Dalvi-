import {  useEffect, useState } from "react";
import "./styles.css";
import React from 'react';
import {  Avatar } from 'antd';
import { GlobalOutlined,PhoneOutlined, DeleteFilled, MailOutlined} from '@ant-design/icons';
import ModalApp from "./ModalApp";
import { Button } from 'antd';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
  



const  ApiEffect = () =>{

const [users,setUsers]=useState([]);

const getUsers = async()=> {
const response= await fetch("https://jsonplaceholder.typicode.com/users");
setUsers(await response.json());

  }
  useEffect(()=>{
    getUsers();
  },[]);

function deleteUser(id){
  fetch("https://jsonplaceholder.typicode.com/users"+id,{
  method:"DELETE"
}).then((result)=>{
result.json().then((resp)=>{
  console.warn(resp)
  getUsers()
})
})
  // alert(id);
}




return(
<div className="mainDiv">
  {
    users.map((curElem)=>{
      return(
            <div className="Container">
       <div className="cardContainer">

<div>
<div Name="name" style={{backgroundColor:"lightgrey",paddingLeft:"50px"}}>  

<Avatar style={{width:"80%",height:"35%",backgroundColor:"lightgray"}} 
src={`https://avatars.dicebear.com/v2/avataaars/${curElem.name}.svg?options[mood][]=happy`}/>
</div>
<div className="personName">   

  {curElem.name}
    </div>
    <div className="personData"> 
    <div className="dataInner"> <MailOutlined /></div>< div  className="dataInner">{curElem.email}</div>
    </div> 
    <div className="personData">  
  <div  className="dataInner"><PhoneOutlined /></div><div  className="dataInner">{curElem.phone}</div>
    </div>  
    <div className="personData">  
   <div  className="dataInner"> <GlobalOutlined /></div><div  className="dataInner">{curElem.website}</div>
    </div>  
    </div>
<div className="icons" style={{overflowY:"hidden"}}>
<div className="iconData"><button  className="iconBtn">
<FormControlLabel control={<Checkbox style={{color:"red"}} icon={<FavoriteBorder />} checkedIcon={<Favorite />}  name="checkedH" />}/></button></div>
<div className="iconData" style={{overflowY:"hidden"}}><ModalApp key={curElem.id} name={curElem.name} email={curElem.email} phone={curElem.phone} website={curElem.website}/> </div>
<div className="iconData"> <Button onClick={()=>deleteUser(curElem.id)} className="iconBtn"  style={{backgroundColor:"transparent" , border:"none", fontSize: "20px",overflowY:"hidden"}}><DeleteFilled/></Button> </div>
    </div>
         </div>
         </div>

      )
    })
  }
  </div>
   
)
}

export default  ApiEffect ;