import React from 'react';
import cn from "classnames";

interface IHeading {
    title: string;
    className?: string;
}

const Heading:React.FC<IHeading> = ({title, className}) => {
    return (
        <h1
        className={cn({
            'text-3xl': className?.includes('xl')
        }, className)}
        >
            {title}
        </h1>
    );
};

export default Heading;