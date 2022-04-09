import './App.scss';
import { HashRouter } from 'react-router-dom';
import Router from './routes/Router';

import ShowsState from './context/ShowsState';
import Nav from './components/Nav/Nav';

function App() {
	return (
		<div className='App'>
			<HashRouter>
				<ShowsState>
					<Nav />
					<Router />
				</ShowsState>
			</HashRouter>
		</div>
	);
}

export default App;
