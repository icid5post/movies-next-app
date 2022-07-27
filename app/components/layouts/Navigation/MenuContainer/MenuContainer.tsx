import React from 'react';
import Menu from "@/components/layouts/Navigation/MenuContainer/Menu";
import {firstMenu, userMenu} from "@/components/layouts/Navigation/MenuContainer/menu.data";
import GenresMenu from "@/components/layouts/Navigation/MenuContainer/Genres/GenresMenu";

const MenuContainer:React.FC = () => {
    return (
        <div>
            <Menu menu={firstMenu}/>
            <GenresMenu/>
            <Menu menu={userMenu}/>
        </div>
    );
};

export default MenuContainer;