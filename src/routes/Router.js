import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import MainShow from './MainShow/MainShow';
import Seasons from './Seasons/Seasons';
import Cast from './Cast/Cast';
import Crew from './Crew/Crew';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/show/:id' element={<MainShow />} />
			<Route path='/seasons/:id' element={<Seasons />} />
			<Route path='/cast/:id' element={<Cast />} />
			<Route path='/crew/:id' element={<Crew />} />
		</Routes>
	);
};

export default Router;
