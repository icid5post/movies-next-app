import React from 'react';
import Logo from "@/components/layouts/Navigation/Logo";
import style from './stytle.module.scss';
import MenuContainer from "@/components/layouts/Navigation/MenuContainer/MenuContainer";

const Navigation:React.FC = () => {
    return (
        <div className={style.navigation}>
            <Logo/>
            <MenuContainer/>
        </div>
    );
};

export default Navigation;