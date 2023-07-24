import React from 'react';
import Carousel from './Carousel';

const Banner = () => {
    const images = [
        'https://img.freepik.com/free-psd/horizontal-banner-template-summer-sale_23-2148723339.jpg?size=626&ext=jpg&ga=GA1.1.1461934439.1649021458&semt=location_fest_v1',
        'https://img.freepik.com/free-vector/fashion-sale-landing-page-template_52683-40480.jpg?w=740&t=st=1685529715~exp=1685530315~hmac=3a0ac33d1dc63f972572b2662af55b54ec35e70bd86743002fa9472e3a360257',
        'https://img.freepik.com/free-psd/banner-template-style-online-shopping_23-2148537545.jpg?w=826&t=st=1685534967~exp=1685535567~hmac=d35f867afa0984ecf4868b8f56b19ef7706ea8a87466072495dfe55fdfb3a08a',
        'https://img.freepik.com/free-psd/banner-template-style-online-shopping_23-2148537545.jpg?w=826&t=st=1685534967~exp=1685535567~hmac=d35f867afa0984ecf4868b8f56b19ef7706ea8a87466072495dfe55fdfb3a08a',
      ];
    return (
        <>
        <div>
      <h1>My Carousel</h1>
      <Carousel images={images} interval={5000} />
    </div>
        </>
    );
};

export default Banner;