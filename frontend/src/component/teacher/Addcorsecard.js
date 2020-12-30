import React, { useState } from 'react';
import { storage } from './firebase';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Form, Input, Button, Radio ,Select, } from 'antd';



 function Addcorsecard() {
    const[name, setName]= useState(true);
    const [image, setImage] = useState();
    const [progress, setProgress] = useState();
    const [urll, setUrl] = useState();
    const [corseTitel, setCorseTitel] = useState();
    const [corseDis, setDis] = useState();
    const history = useHistory();
    const [form] = Form.useForm();
    const [requiredMark, setRequiredMarkType] = useState();
    const { TextArea } = Input;
    const onRequiredTypeChange = ({ requiredMark }) => {
        setRequiredMarkType(requiredMark);
      };
    
    const fileUploadeHandler = () => {
        // create images folder in Firebase and fill it with image name then uploade it
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        //uploadeTask is a function with 4 parameters
        uploadTask.on('state_changed',
        (snapshot) => {
            // progrss function ....
            const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            setProgress( {progress: progress});
        },
        (error) => {
        // error function ....
        console.log(error);
        },
       () => {
        // complete function ....
       storage.ref('images').child(image.name).getDownloadURL().then(url => {
        setUrl({ urll: url });
        console.log(urll);
       })
     }
     );
    }
    const supmet = async ()=>{
        try{
        const name = setName(localStorage.getItem('teacherName'))
        console.log(name)
        var card = {
          Title: corseTitel,
           Desceription: corseDis,
           url: urll,
           Name: name
        }
       console.log(card)
        var Res = await axios.post('http://localhost:8000/teacher/addcard', card)
        Res.then(console.log('uuuuuuu'))
    
        // history.push('/')
     }catch (error){
        console.log('error')}
    }
    return (
        
       <div>
        <Form
        form={form}
        layout="vertical"
        initialValues={{ requiredMark }}
        onValuesChange={onRequiredTypeChange}
        requiredMark={requiredMark}
        ></Form>
        <Form.Item label="Required Mark" name="requiredMark">
        <Radio.Group>
          <Radio.Button value="optional">Optional</Radio.Button>
          <Radio.Button value={true}>Required</Radio.Button>
          <Radio.Button value={false}>Hidden</Radio.Button>
        </Radio.Group>
      </Form.Item>

      <Form.Item label="Corse Titel" required tooltip="This is a required field">
        <Input placeholder="Enter titel" onChange={(e)=> {setCorseTitel(e.target.value)}} />
      </Form.Item>

       <input type='file' onChange={(e) => {setImage(e.target.files[0]) }} />
       <button onClick={fileUploadeHandler}>UPPLOAD</button><br/>
       {image === undefined ? console.log("no image") : <img src={image.name}/>}

       <Form.Item label="Discription" required tooltip="This is a required field">
       <TextArea placeholder="Enter Discription " rows={4} onChange={(e)=> {setDis(e.target.value)}}/>
       </Form.Item>  
       <Form.Item>

        <Button type="primary" onClick={supmet} >Submit</Button>
       </Form.Item>  
       </div>
     
        
    )
}

export default Addcorsecard

