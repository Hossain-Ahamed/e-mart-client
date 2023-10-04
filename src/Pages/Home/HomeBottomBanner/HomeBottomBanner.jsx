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
        <div className='flex gap-10 justify-center py-20'>
            {
                banners.map((image, index) => (
                    <div key={index}>
                        <img src={image} alt="" className='w-[600px] h-[400px] rounded-md' />

                    </div>
                ))
            }
        </div>
    );
};

export default HomeBottomBanner;