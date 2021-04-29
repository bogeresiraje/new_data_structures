import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ToastProvider } from 'react-toast-notifications';
import Factorial from "./components/question_1/Factorial";
import Finobacci from "./components/question_1/Finobacci";
import TowerOfHanoi from "./components/question_1/TowerOfHanoi";
import Queue from "./components/question_2/Queue";
import Stack from "./components/question_2/Stack";
import LinkedList from './components/question_2/LinkedList';


function App() {
	return (
		<BrowserRouter>
			<ToastProvider>
				<Switch>
					<Route exact path="/" component={Factorial} />
					<Route path="/finobacci" component={Finobacci} />
					<Route path="/tower_of_hanoi" component={TowerOfHanoi} />
					<Route path="/stack" component={Stack} />
					<Route path="/queue" component={Queue} />
					<Route path="/linked_list" component={LinkedList} />
				</Switch>
			</ToastProvider>
		</BrowserRouter>
	);
}

export default App;
