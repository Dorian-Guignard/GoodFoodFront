import './AddRecipe.css'; 
import {Typography, Steps} from 'antd';
import {EditOutlined} from "@ant-design/icons";
import { useState } from 'react';
import AddRecipeInfo from './AddRecipeInfo/AddRecipeInfo';
import AddRecipeFoods from './AddRecipeFoods/AddRecipeFoods';
import AddRecipeSteps from './AddRecipeSteps/AddRecipeSteps';
import AddRecipeFinish from './AddRecipeFinish/AddRecipeFinish';
const {Title}=Typography;

function AddRecipe(){

    const [current, setCurrent] = useState(0)
    const [infoDetails, setInfoDetails] = useState(null)
    const [foodsDetails, setFoodsDetails] = useState(null)
    const [stepsDetails, setStepsDetails] = useState(null)

    const onFinishInfoForm=(values)=>{
        setInfoDetails(values);
        setCurrent(1);
    }

    const onFinishFoodsForm=(values)=>{
        setFoodsDetails(values);
        setCurrent(2);
    }
    
    const onFinishStepsForm=(values)=>{
        setStepsDetails(values);
        setCurrent(3);
    }

    const forms = [
        <AddRecipeInfo onFinish={onFinishInfoForm} initialValues={infoDetails}/>,
        <AddRecipeFoods onFinish={onFinishFoodsForm} initialValues={foodsDetails}/>,
        <AddRecipeSteps onFinish={onFinishStepsForm} initialValues={stepsDetails}/>,
        <AddRecipeFinish infoDetails={infoDetails} foodsDetails={foodsDetails} stepsDetails={stepsDetails} />,
    ]

    const isStepDisabled=(stepNumber)=>{
        if(stepNumber===0){
            return false
        }
        if(stepNumber===1){
            return infoDetails === null 
        }
        if(stepNumber===2){
            return infoDetails === null || foodsDetails === null
        }
        if(stepNumber===3){
            return infoDetails === null || foodsDetails === null || stepsDetails === null
        }
    }

    console.log(infoDetails)
    console.log(foodsDetails)
    console.log(stepsDetails)
    
    
    return(
        <div className='recipe-add'>
        <Title level={2} className='recipe-title'>Ajouter une recette</Title>
        <Steps className='ant-steps' onChange={setCurrent} current={current}>
            <Steps.Step disabled={isStepDisabled(0)} title='Ma recette' icon={<EditOutlined/>}/>
            <Steps.Step disabled={isStepDisabled(1)} title='Mes ingrédients'icon={<EditOutlined/>}/>
            <Steps.Step disabled={isStepDisabled(2)} title='Ma préparation'icon={<EditOutlined/>}/>
            <Steps.Step disabled={isStepDisabled(3)} title='Validation'icon={<EditOutlined/>}/>
        </Steps>
        {forms[current]}
        </div>
    )
}




export default AddRecipe