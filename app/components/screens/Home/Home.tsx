import React from 'react';
import {IHomeInterface} from "@/screens/Home/Home.interface";
import Layout from "@/components/layouts/Layout";

const Home:React.FC<IHomeInterface> = () => {
    return (
        <Layout>
            <h1>Home Page</h1>
        </Layout>
    );
};

export default Home;