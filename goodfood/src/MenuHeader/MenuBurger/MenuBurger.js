
import { Menu} from 'antd'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useVirtuesContext } from '../../Utils/providers/VirtuesProvider';


function MenuBurger ({onClose}){
  const {virtues} = useVirtuesContext();
  const [openKeys, setOpenKeys] = useState([]);
  const navigate = useNavigate()
  const onOpenChange = (keys) => {
    setOpenKeys(keys);
  };
  const handleClick = ({key}) => {
    onClose(); // ferme le drawer
    navigate(key)
  };
  
  
    return(     
<Menu style={{border:'none'}}
      openKeys={openKeys}
      onOpenChange={onOpenChange}
      onClick={handleClick}
      mode="inline"
      items={[
            {label:"Catégorie", key:"Catégorie", 
            children: [
              { label:"Ptit Déj", key: "/categorie/Ptit-Déj" },
              { label:"Entrée", key: "/categorie/Entrée"},
              { label:"Plat", key: "/categorie/Plat"},
              { label:"Dessert", key: "/categorie/Dessert"},
              { label:"Boisson", key: "/categorie/Boisson"}
            ],
            },
            {label: "Vertue", key:"Vertue",
            children: virtues.map(virtue => ({label: virtue.name, key: `/vertue/${virtue.name}`}))
            },
            {label:"Ajouter une recette", key:"/recipe/add" },
          
            ]}>          
  </Menu>
    )
}

export default MenuBurger;