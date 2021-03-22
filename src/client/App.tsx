import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './views/Home';
import Details from './views/Details';
import Admin from './views/Admin';
import Compose from './views/Compose';


const App: React.FC<AppProps> = () => { 
	return (
		<BrowserRouter>
		<Navbar />
			<Switch>
				<Route exact path='/'>
					<Home />
				</Route>
				<Route exact path='/details/:id'>
					<Details />
				</Route>
				<Route exact path='/admin/:id'>
					<Admin />
				</Route>
				<Route exact path='/compose'>
					<Compose />
				</Route>
			</Switch>
		</BrowserRouter>
	);
}

interface AppProps {} 
export default App;



// import * as React from 'react';
// import { useState, useEffect } from 'react';

// /* HOOK REACT EXAMPLE */
// const App = (props: AppProps) => {
// 	const [greeting, setGreeting] = useState<string>('');

// 	useEffect(() => {
// 		async function getGreeting() {
// 			try {
// 				const res = await fetch('/api/hello');
// 				const greeting = await res.json();
// 				setGreeting(greeting);
// 			} catch (error) {
// 				console.log(error);
// 			}
// 		}
// 		getGreeting();
// 	}, []);

// 	return (
// 		<main className="container my-5">
// 			<h1 className="text-primary text-center">Hello {greeting}!</h1>
// 		</main>
// 	);
// };

// interface AppProps {}

// export default App;
