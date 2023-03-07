
import {Form, Input, Select, Button} from 'antd';
import { useVirtuesContext } from '../../../Utils/providers/VirtuesProvider';


function AddRecipeInfo({ onFinish, initialValues }) {
  
    const {virtues} = useVirtuesContext();

    return (<Form onFinish={onFinish} initialValues={initialValues}>
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
        <Form.Item  name={'duration'}>
            <Input placeholder='Temps avant de se régaler (préparation + cuisson) en minute'/>
        </Form.Item>
        <Form.Item name={'heatTime'}>
            <Input placeholder='Temps de cuisson en minute' />
        </Form.Item>
        <Form.Item name={'prepTime'}>
            <Input placeholder='Temps de préparation en minute' />
        </Form.Item>
        <Form.Item  name={'portion'}>
            <Input placeholder='Nombre de convives'/>
        </Form.Item>
        <Form.Item  name={'picture'}>
            <Input placeholder='Image'/>
        </Form.Item>
        
        <Form.Item
            name={[virtues.name, "virtue"]} 
            >
            <Select
            mode='tags' 
            allowClear
            placeholder='Vertue'
            >
                {virtues.map((virtue)=>{
                return <Select.Option key={virtue.id} value={virtue.name}>{virtue.name}</Select.Option>
                })}
            </Select>
        </Form.Item>
        
        <Form.Item  name={'category'}>
            <Input placeholder='Categorie'/>
        </Form.Item>
        
        <Button type='primary' htmlType='submit'>
            Validez
        </Button>
    </Form>
)}

export default AddRecipeInfo