import React, { useState } from 'react';
import {  EditOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import { Modal, Button } from 'antd';


const ModalApp = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button className="iconBtn" style={{backgroundColor:"transparent" , border:"none", fontSize: "20px"}} onClick={showModal}>
      <EditOutlined  />
      </Button>
      <Modal label={props.key} title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
       <div style={{display:"flex",}}> <h3 style={{color:"red",padding:"5px"}}>*</h3> <h3 style={{padding:"5px",paddingRight:"21px"}}>Name: </h3><input placeholder={props.name} style={{margin:"5px"}}/> </div>
       <div style={{display:"flex",}} > <h3 style={{color:"red",padding:"5px"}}>*</h3> <h3 style={{padding:"5px",paddingRight:"24px"}}>Email:</h3 ><input placeholder={props.email} style={{margin:"5px"}}/> </div>
       <div style={{display:"flex",}}><h3 style={{color:"red",padding:"5px"}}>*</h3> <h3 style={{padding:"5px",paddingRight:"17px"}}>Phone:</h3><input placeholder={props.phone} style={{margin:"5px"}}/> </div>
       <div style={{display:"flex",}}> <h3 style={{color:"red",padding:"5px"}}>*</h3> <h3 style={{padding:"5px"}}>Website:</h3><input placeholder={props.website} style={{margin:"5px"}}/> </div>
      </Modal>
    </>
  );
};


export default ModalApp;