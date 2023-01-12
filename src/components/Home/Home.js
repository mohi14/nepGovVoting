import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => {
    return (
        <div className='vote-now  w-[630px] m-auto mt-20 text-white'>
            <div className='p-[25px]'>
              <div className='flex justify-between items-center'>
              <h3 className='uppercase text-lg pb-[14px]'>
                Daily Question
                </h3>
                <div className='flex items-center '>
                    <h3 className='mr-3 text-xl font-semibold'>Live</h3>


                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.50002 14.5834C6.52016 14.5834 5.59933 14.3974 4.73752 14.0252C3.87572 13.6536 3.12606 13.149 2.48856 12.5115C1.85106 11.874 1.34649 11.1244 0.974854 10.2626C0.602743 9.40077 0.416687 8.47994 0.416687 7.50008C0.416687 6.52022 0.602743 5.59939 0.974854 4.73758C1.34649 3.87578 1.85106 3.12612 2.48856 2.48862C3.12606 1.85112 3.87572 1.34632 4.73752 0.974206C5.59933 0.602567 6.52016 0.416748 7.50002 0.416748C8.47988 0.416748 9.40071 0.602567 10.2625 0.974206C11.1243 1.34632 11.874 1.85112 12.5115 2.48862C13.149 3.12612 13.6535 3.87578 14.0252 4.73758C14.3973 5.59939 14.5834 6.52022 14.5834 7.50008C14.5834 8.47994 14.3973 9.40077 14.0252 10.2626C13.6535 11.1244 13.149 11.874 12.5115 12.5115C11.874 13.149 11.1243 13.6536 10.2625 14.0252C9.40071 14.3974 8.47988 14.5834 7.50002 14.5834Z" fill="white"/>
</svg>


                </div>
              </div>
                <p className='text-[22px] font-semibold mb-[72px]'>Will advice to drink less change how much alcohol you drink this Christmas? Plus, present wrapping, and Christmas pudding</p>
<Link to='/vote-now'><button className='btn w-full bg-white border-0 rounded-[50px]'><span className='text-[#3560AD] text-lg font-bold normal-case'>Vote Now</span> </button></Link>
            </div>
        </div>
    );
};

export default Home;