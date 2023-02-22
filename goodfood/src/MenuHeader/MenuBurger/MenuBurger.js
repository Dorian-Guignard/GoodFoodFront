
import { Menu} from 'antd'
import { useState } from 'react';


function MenuBurger (){
  const [openKeys, setOpenKeys] = useState([]);

  const onOpenChange = (keys) => {
    setOpenKeys(keys);
  };

    return(     
<Menu style={{border:'none'}}
      openKeys={openKeys}
      onOpenChange={onOpenChange}
      mode="inline"
      items={[
            {label:"Catégorie", key:"Catégorie", 
            children: [
              { label:"Ptit Déj", key: "Ptit Déj"},
              { label:"Entrée", key: "Entrée"},
              { label:"Plat", key: "Plat"},
              { label:"Dessert", key: "Dessert"},
              { label:"Boisson", key: "Boisson"}
            ],
            },
            {label: "Vertue", key:"Vertue",
            children: [
              { label:"Boost", key: "Boost"},
              { label:"Vitaminés", key: "Vitaminés"},
              { label:"Détox", key: "Détox"},
              { label:"Sommeil", key: "Sommeil"},
              { label:"Transit", key: "Transit"},
              { label:"Protéinés", key: "Protéinés"},
              { label:"Immunité", key: "Immunité"},
              { label:"Rajeunissant", key: "Rajeunissant"}
            ],
          },
            {label:"Ajouter une recette"},
          
            ]}>
            
  </Menu>
    )
}

export default MenuBurger;