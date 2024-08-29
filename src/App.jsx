import './App.scss';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import MainContent from './components/mainContent/MainContent';
import Blog from './components/blog/Blog';
import CarDetail from './components/carDetail/CarDetail';
import Tabs from './components/tabs/Tabs';
import { Route, Routes } from 'react-router';

function App() {
    return (
        <div className='wrapper'>
            <Header />

            <Routes>
                <Route
                    path='/'
                    element={
                        <MainContent>
                            <Blog />
                            <Tabs />
                        </MainContent>
                    }
                />
                <Route
                    path='/newcar'
                    element={
                        <MainContent>
                            <Blog />
                            <Tabs />
                        </MainContent>
                    }
                />
                <Route path='/detail/:carId' element={<CarDetail />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
