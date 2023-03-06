import './AddRecipeFoods.css';
import React from 'react';
import {Form, Input, Select, Button, Space} from 'antd';
import Operation from 'antd/es/transfer/operation';



function AddRecipeFoods({ onFinish, initialValues }) {
    
    const foodtest = ['tomate','banane',];
    

    return (
        <div className='AddFoods'>
        <Form onFinish={onFinish} initialValues={initialValues}>
            <Form.List name={"foodList"}>
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
                                {foodtest.map((food,index)=>{
                                return <Select.Option key={index} value={food}>{food}</Select.Option>
                            })}
                            </Select>
                        </Form.Item>
                        <Form.Item
                        name={[field.name, "quantity"]}
                        
                        >
                        <Input placeholder='quantité'/>
                        </Form.Item>
                        <Form.Item
                        name={[field.name, "unity"]}
                        
                        >
                        <Input placeholder='unité'/>
                        </Form.Item>
                        
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