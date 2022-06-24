import React from 'react';
import {IMenu} from "@/components/layouts/Navigation/MenuContainer/Menu.interface";
import MenuItem from "@/components/layouts/Navigation/MenuContainer/MenuItem";
import style from './Menu.module.scss';


const Menu:React.FC<{menu: IMenu}> = ({menu: {title, items}}) => {
    return (
        <div className={style.menu}>
            <div className={style.heading}>{title}</div>
            <ul>
                {
                    items.map((item)=>{
                        return(
                            <MenuItem item={item} key={item.link}/>
                        )
                    })
                }

            </ul>

        </div>
    );
};

export default Menu;