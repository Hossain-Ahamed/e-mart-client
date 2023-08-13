import React from 'react';
import { useParams } from 'react-router-dom';
import Layout1 from '../../Component/HomeLayout/Layout1';
import Layout2 from '../../Component/HomeLayout/Layout2';
import Layout3 from '../../Component/HomeLayout/Layout3';

const SelectLayout = () => {
    const {layout} = useParams();
    console.log(layout);
    if(layout === '1'){
        return <Layout1></Layout1>
    }
    else if(layout === '2'){
        return <Layout2></Layout2>
    }
    else{
        return <Layout3></Layout3>
    }
    
};

export default SelectLayout;