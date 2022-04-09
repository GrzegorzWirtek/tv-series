import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Seasons from './Seasons/Seasons';
import MainShow from './MainShow/MainShow';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/show/:id' element={<MainShow />} />
			<Route path='/seasons' element={<Seasons />} />
		</Routes>
	);
};

export default Router;
