import {Form, Input, Button} from 'antd';


function AddRecipeSteps({ onFinish, initialValues}) {

    

    return (
        <Form onFinish={onFinish} initialValues={initialValues}>
        <Form.Item 
        label='Etape 1' 
        name={'food'} 
        rules={[
            {
                required: true,
                message: "Soyons sérieux il faut au moins une étape"
            },
        ]}>
            <Input />
        </Form.Item>

        <Button type='primary' htmlType='submit'>
            Ajouter une Etape
        </Button>

        <Button type='primary' htmlType='submit'>
            Validez
        </Button>
    </Form>
)}

export default AddRecipeSteps