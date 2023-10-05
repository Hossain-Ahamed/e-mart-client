import React from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const HomeBottomBanner = () => {
    const slug = "home";
    const { axiosSecure } = useAxiosSecure();
  const { refetch, data: banners = [], isLoading, isError } = useQuery({
    queryKey: ["bottomBanners", slug],
    queryFn: async () => {
      const res = await axiosSecure.get(`/home-bottom-banners/${slug}/bottom-banner`);
      console.log(res.data);
      return res?.data;
    },
  });
    return (
        <div className='grid md:flex gap-3 lg:gap-10 justify-center py-10 md:py-20'>
            {
                banners.map((image, index) => (
                    <div key={index}>
                        <img src={image} alt="" className='w-[250px] h-[150px] md:h-[200px] lg:w-[600px] lg:h-[400px] rounded-md' />

                    </div>
                ))
            }
        </div>
    );
};

export default HomeBottomBanner;