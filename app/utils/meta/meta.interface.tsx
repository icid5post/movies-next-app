import {ReactElement} from "react";

export interface MetaInterface{
    title: string;
    description?: string;
    image?: string;
    children?: ReactElement;
}