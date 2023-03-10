
import {Form, Input, Select, Button, Upload } from 'antd';
import { useVirtuesContext } from '../../../Utils/providers/VirtuesProvider';


function AddRecipeInfo({ onFinish, initialValues }) {
  
    const {virtues} = useVirtuesContext();
    const categories = [
        { id: 11, name: "Dessert" },
        { id: 9, name: "Entrée" },
        { id: 10, name: "Plat" },
        { id: 12, name: "Boisson" },
        { id: 13, name: "Petit Dej"}
      ];
    



    return (
    
    <Form onFinish={onFinish} initialValues={initialValues}>
        
        <Form.Item 
        label='Titre de la recette' 
        name={'name'} 
        rules={[
            {
                required: true,
                message: "Merci de donner un nom à votre recette"
            },
        ]}>
            <Input />
        </Form.Item>
        
        <Form.Item  
        name={'description'}>
            
            <Input  placeholder='Description rapide de la recette'/>
        
        </Form.Item>
        
        <Form.Item name={'duration'}
        rules={[
            {
                required: true,
                message: "Merci de donner une durée à votre recette",
            },
        ]}>
            <Input type='number'placeholder='Temps avant de se régaler (préparation + cuisson) en minute'/>
        
        </Form.Item>
        
        <Form.Item 
        type="number" 
        name={'heatTime'}
        rules={[
            {
                required: true,
                message: "Merci de donner une durée de cuisson",
            },
        ]}>
            
            <Input placeholder='Temps de cuisson en minute' />
        
        </Form.Item>
        
        <Form.Item 
        type="number" 
        name={'prepTime'}
        rules={[
            {
                required: true,
                message: "Merci de donner une durée de préparation",
            },
        ]}>
            
            <Input placeholder='Temps de préparation en minute' />
        
        </Form.Item>
        
        <Form.Item 
        type="number"  
        name={'portion'}
        rules={[
            {
                required: true,
                message: "Merci de donner le nombre de convives",
            },
        ]}>
            
            <Input placeholder='Nombre de convives'/>
        
        </Form.Item>
        
        <Form.Item
            name="category"
            rules={[
                {
                    required: true,
                    message: "Merci de sélectionner une catégorie",
                },
            ]}>
            
            <Select
            mode='tags' 
            allowClear
            placeholder='Categorie'
            >
                {categories.map((category)=>{
                return <Select.Option key={category.id} value={category.id}>{category.name}</Select.Option>
                })}
            </Select>
        
        </Form.Item>
        
        <Form.Item
            name="virtue"
            rules={[
                {
                    required: true,
                    message: "Merci de sélectionner une vertu",
                },
            ]}>
            <Select
            mode='tags' 
            allowClear
            placeholder='Vertue'
            >
                {virtues.map((virtue)=>{
                return <Select.Option key={virtue.id} value={virtue.data}>{virtue.name}</Select.Option>
                })}
            
            </Select>
        
        </Form.Item>

        
        
        <Button type='primary' htmlType='submit'>
            Validez
        </Button>
    </Form>
)}

export default AddRecipeInfo