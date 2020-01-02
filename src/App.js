import React from 'react';
import './App.css';

import {
	BrowserRouter as Router,
	Route,
	Switch,
	useParams,
	Redirect
} from 'react-router-dom'

const notFound = () => <h1>NOT FOUND</h1>;
const Home = () => <h1>Home</h1>;
const Admin = () => <h1>Admin</h1>;
const Play = () => {
	let {slug} = useParams();
	console.log(slug);
	return (
		<h1>Play {slug}</h1>
	)
};

class App extends React.Component {
	constructor() {
		super();
	}

	componentDidMount() {
		console.log(this.props);

	}

	componentDidUpdate(prevProps) {
		if (prevProps.match.params.slug !== this.props.match.params.slug) {
			console.log(this.props.match.params.slug);
		}
	}


	render() {
		return (
			<div className="App">
				<header className="App-header">
					<Router>
						<div>
							<Switch>
								<Route exact path="/" component={Home}/>
								<Route exact path="/play/:slug" component={Play}/>
								<Route exact path="/admin" component={Admin}/>
								<Route component={notFound}/>
							</Switch>
						</div>
					</Router>
				</header>
				<p className="App-intro">
					To get started, edit <code>src/App.js</code> and save to reload.
				</p>
			</div>
		)

	}
}


export default App;
