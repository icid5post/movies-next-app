import React from 'react';
import {useActions} from "@/hooks/useActions";

const LogoutButton:React.FC = () => {

    const {logout} = useActions()

    const handleLogout = (e:MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
    }

    return (
        <div>

        </div>
    );
};

export default LogoutButton;