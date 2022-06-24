import React from 'react';
import {TypeMaterialIconName} from "@/shared/Types/Icon.types";
import * as MaterialIcons from 'react-icons/md';


const MaterialIcon:React.FC<{name: TypeMaterialIconName}> = ({name}) => {
    const IconComponent = MaterialIcons[name]
    return <IconComponent /> || <MaterialIcons.Md1XMobiledata/>
};

export default MaterialIcon;