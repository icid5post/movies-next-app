import React from 'react';
import Link from "next/link";
import logo from '@/assets/images/logo.svg'
import Image from 'next/image';

const Logo:React.FC = () => {
    return (
        <Link href={'/'}>
            <a className='px-layout block mb-10'>
                <Image src={logo} alt="Logo"/>
            </a>
        </Link>
    );
};

export default Logo;