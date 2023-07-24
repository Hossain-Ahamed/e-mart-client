import React from 'react';
import { BsArrowRight } from 'react-icons/bs';

const WomenSecondBanner = () => {
    return (
        <>
        <div className='w-full h-[500px] relative my-24'>
            <div className='absolute w-3/5 h-4/5 border top-0 left-0 bg-stone-100'>
                <div className='w-[600px] ml-12 mt-28'>
                    <h3 className='text-3xl font-semibold'>Her Story</h3>
                    <p className='my-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto consequatur, nesciunt accusamus maiores omnis doloribus suscipit quibusdam quaerat ea voluptas!</p>
                    <button className="text-white text-[9px] md:text-base md:font-bold bg-amber-800 w-20 h-5 md:w-28 md:h-8 lg:w-32 lg:h-12 flex justify-center items-center gap-2">Shop Now <BsArrowRight></BsArrowRight></button>
                </div>
            </div>
            <div className='absolute w-1/2 h-4/5 bottom-0 right-0'>
                <img src="https://img.freepik.com/free-photo/fall-studio-shot-two-models-with-blond-wavy-hairstyle-wool-straw-hat-wearing-striped-poncho_273443-3793.jpg?size=626&ext=jpg&ga=GA1.1.1461934439.1649021458&semt=ais" alt="" className='w-[700px] h-[395px]' />
            </div>
        </div>
        </>
    );
};

export default WomenSecondBanner;