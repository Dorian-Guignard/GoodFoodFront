import React from 'react';
import {Form, Input, Select, Button, Space} from 'antd';
import {MinusCircleOutlined} from "@ant-design/icons";
import Operation from 'antd/es/transfer/operation';


function AddRecipeSteps({ onFinish, initialValues}) {

    

    return (
        <Form onFinish={onFinish} initialValues={initialValues}>
            <Form.List name={"steps"}>
                {(fields, {add, remove})=>(
                  <>
                  {fields.map((field,index) => {
                    return (
                    
                    <Form.Item
                    key={field.key}
                    name={[field.name, "steps"]}
                    size={24}
                    >
                        <Input placeholder={`Etape ${index+1}`}/>
                    </Form.Item>
                    
                    );    
                  })}
                    <Form.Item>
                        <Button type="dashed" block onClick={()=>{
                        add()
                        }} >
                            Ajouter une étape
                        </Button>
                    </Form.Item>
                    <Button type='primary' htmlType='submit'>
                    Valider ma liste d'étape(s)
                    </Button>
                  </>
                )}
            </Form.List>
        </Form>
)}

export default AddRecipeSteps