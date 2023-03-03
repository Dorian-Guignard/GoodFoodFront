import './AddRecipeFoods.css'; 
import {Form, Input, Select, Button} from 'antd';


function AddRecipeFoods({ onFinish, initialValues }) {
    
    const foodtest = ['tomate','banane',]

    return (
        <div>
        <Form onFinish={onFinish} initialValues={initialValues}>
        <Form.Item 
        label='Ingrédient' 
        name={'food'} >
            <Select mode='tags'
            
            allowClear>
                {foodtest.map((food,index)=>{
                    return <Select.Option key={index} value={food}>{food}</Select.Option>
                })}
            </Select>
        </Form.Item>
        <Form.Item name={'unity'}>
            <Input placeholder='unité de mesure (ex : cl, grammes, etc.)'/>
        </Form.Item>
        <Form.Item name={'quantity'}>
            <Input placeholder='quantité'/>
        </Form.Item>
        
        <Button type='primary' htmlType='submit'>
            Ajouter cet Ingrédient
        </Button>
        <Button type='primary' htmlType='submit'>
            Validez ma liste d'ingrédients
        </Button>
        </Form>
        <div className='result-area'>
            <ul className='recipe-ingredients'> 
                <li className="foods-list"> Tomate : 200 grammes</li>
                <li className="foods-list"> Banane : 4</li>
            </ul>

        </div>
        
        </div>
        

)}

export default AddRecipeFoods