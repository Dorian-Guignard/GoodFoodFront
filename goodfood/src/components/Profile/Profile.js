import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../Utils/providers/UserContext';
import { useRecipesContext } from '../../Utils/providers/RecipesProvider';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useMediaQuery } from 'react-responsive';

import UserInformation from './UserInfo/UserInfo';
import RecipeList from './RecipeById/RecipeById';
import Loader from '../Loader/Loader';

import './Profile.css'



function Profile(){

    const isSmallScreen=useMediaQuery({ maxWidth: 450 })
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    const [data, setData] = useState(null)
    const { user } = useContext(UserContext);
    const {recipes} = useRecipesContext(); 
    
    
    

    useEffect(() => {
        async function fetchUserData() {
            if (user) {
                try {
                    const response = await axios.get('http://0.0.0.0:8080/api/usersconnect', {
                        headers: {
                            Authorization: `Bearer ${user}`
                        }
                    });
                    setData(response.data);
                    setIsLoading(false);
                    
                } catch (error) {
                    console.error(error);
                }
            }
        }
        fetchUserData();
    }, [user]);;

    if (isLoading) {
        return <Loader />;
      }
    
    return(

        <div className='profile'>
             <UserInformation data={data} />
             {data && <RecipeList recipes={recipes} navigate={navigate} isSmallScreen={isSmallScreen} data={data}  />}
        </div> 
    )
}

export default Profile;