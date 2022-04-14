import './App.scss';
import { HashRouter } from 'react-router-dom';
import Router from './routes/Router';

import ShowsState from './context/ShowsState';
import Nav from './components/Nav/Nav';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
	return (
		<div className='App'>
			<HashRouter>
				<ShowsState>
					<Header />
					<Nav />
					<Router />
					<Footer />
				</ShowsState>
			</HashRouter>
		</div>
	);
}

export default App;
