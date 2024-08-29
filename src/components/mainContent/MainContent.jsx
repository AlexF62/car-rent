import React from 'react';
import Blog from '../blog/Blog';
import Tabs from '../tabs/Tabs';
import { Route, Routes } from 'react-router';
import CarDetail from '../carDetail/CarDetail';

const MainContent = () => {
    return (
        <main className='main'>
            <Blog />
            <Tabs />
            <Routes>
                <Route path='/detail/:carId' element={<CarDetail />} />
            </Routes>
        </main>
    );
};

export default MainContent;
