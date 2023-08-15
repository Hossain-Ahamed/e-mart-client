import React from 'react';
import { useParams } from 'react-router-dom';
import UploadCategory from '../Dashboard/Dashboard/AdminDashboard/UploadCategory/UploadCategory';
import AddSubCategory from '../Dashboard/Dashboard/AdminDashboard/UploadSubCategory/AddSubCategory';
import Home from '../Home/Home/Home';

const SelectType = () => {
    const {type} = useParams();
    if(type === 'upload-category'){
        return <UploadCategory></UploadCategory>
    }
    if(type === 'upload-sub-category'){
        return <AddSubCategory></AddSubCategory>
    }
    return <Home></Home>
};

export default SelectType;