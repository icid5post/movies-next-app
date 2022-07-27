import React from 'react';
import MetaInfo from "@/utils/meta/MetaInfo";
import Heading from "@/ui/Heading/Heading";

const Error404
= () => {
    return (
        <>
            <MetaInfo title='Page not found'/>
            <Heading title='404 - Page not found' className="text-gray-500  mb-8 text-xl"/>
        </>
    );
};

export default Error404;