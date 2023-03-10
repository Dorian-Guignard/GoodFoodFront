import './AddRecipeFoods.css';
import { useState, useEffect } from "react"
import {Form, Input, Select, Button, Space} from 'antd';
import {MinusCircleOutlined} from "@ant-design/icons";
import Loader from '../../Loader/Loader';
import axios from 'axios';
import Operation from 'antd/es/transfer/operation';



function AddRecipeFoods({ onFinish, initialValues }) {
    

    const [foods, setFoods] = useState([])
    const [loading, setLoading] = useState(false);
    

    const fetchResults = () => {
        setLoading(true);
        axios.get(`http://0.0.0.0:8080/api/foods`)
          .then((response) => {
            
            setFoods(response.data[0].foods);
          })
          .catch((error) => {
            console.error(error);
          })
          .finally(() => {
            setLoading(false);
          });
      };
    

      useEffect(() => {
        fetchResults();
      }, []);

    
   
    
    if (foods !== null)
    return (
        <div className='AddFoods'>
        <Form onFinish={onFinish} initialValues={initialValues}>
            <Form.List name={"compositions"}>
                {(fields,{add, remove})=>(
                    <>
                    {fields.map((field,index) => {
                        return (
                            <Space key={field.key} direction="horizontal" size={24} >
                        
                        <Form.Item
                        name={[field.name, "food"]} 
                        >
                            <Select
                            mode='tags' 
                            allowClear
                            placeholder='Aliment'
                            >
                                {foods.map((food)=>{
                                return <Select.Option key={food.id} value={food.data}>{food.name}</Select.Option>
                            })}
                            </Select>
                        </Form.Item>
                        <Form.Item
                        name={[field.name, "quantity"]}
                        >
                          <Input type="number" placeholder='quantité'/>
                        </Form.Item>
                        <Form.Item
                        name={[field.name, "unity"]}
                        >
                          <Input placeholder='unité'/>
                        </Form.Item>
                        <MinusCircleOutlined 
                        onClick={() => { 
                          remove(field.name);
                        }}
                        />
                        </Space>
                        );    
                })}
                    
                
                <Form.Item>
                <Button type="dashed" block onClick={()=>{
                add()
                }} >
                    Ajouter un Ingrédient
                </Button>
                </Form.Item>
                <Button type='primary' htmlType='submit'>
            Valider ma liste d'ingrédients
            </Button>
                </>
                )}
            </Form.List>
        
            
           
        
        </Form>

        </div>
        

);}

export default AddRecipeFoods