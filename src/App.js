import './App.scss';
import { HashRouter } from 'react-router-dom';
import Router from './routes/Router';

import ShowsState from './context/ShowsState';
import Nav from './components/Nav/Nav';
import Search from './components/Search/Search';

function App() {
	return (
		<div className='App'>
			<HashRouter>
				<ShowsState>
					<Search />
					<Nav />
					<Router />
				</ShowsState>
			</HashRouter>
		</div>
	);
}

export default App;
