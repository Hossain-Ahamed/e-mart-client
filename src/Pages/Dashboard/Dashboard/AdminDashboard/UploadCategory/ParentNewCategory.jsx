import React, { useState } from 'react';
import UploadCategory from './UploadCategory';
import HomePageLayout from './HomePageLayout';

const ParentNewCategory = () => {
    const [newCategory, setNewCategory] = useState(null);

  const handleNewCategory = (category) => {
    setNewCategory(category);
  };
    return (
        <div>
      <UploadCategory onNewCategory={handleNewCategory} />
      <HomePageLayout newCategory={newCategory} />
    </div>
    );
};

export default ParentNewCategory;