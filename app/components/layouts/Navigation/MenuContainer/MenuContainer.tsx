import React from 'react';
import Menu from "@/components/layouts/Navigation/MenuContainer/Menu";
import {firstMenu} from "@/components/layouts/Navigation/MenuContainer/menu.data";

const MenuContainer:React.FC = () => {
    return (
        <div>
            <Menu menu={firstMenu}/>
        </div>
    );
};

export default MenuContainer;