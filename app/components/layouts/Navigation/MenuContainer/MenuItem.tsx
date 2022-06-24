import React from 'react';
import {IMenuItem} from "@/components/layouts/Navigation/MenuContainer/Menu.interface";
import cn from 'classnames';
import {useRouter} from "next/router";
import styles from './Menu.module.scss';
import Link from "next/link";
import MaterialIcon from "@/ui/MaterialIcon/MaterialIcon";

const MenuItem:React.FC<{item: IMenuItem}> = ({item: {icon, title, link}}) => {
    const {asPath} = useRouter();

    return (
        <li className={cn({
            [styles.active]: asPath === link
        })}>
            <Link href={link}>
                <a>
                    <MaterialIcon name={icon}/>
                    <span>{title}</span>
                </a>
            </Link>
        </li>
    );
};

export default MenuItem;