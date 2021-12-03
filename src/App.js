import { useState } from "react";
import Header from "./components/Header";
import Activities from "./components/Activities";

const App = () => {
	const [activities, setActivities] = useState([
		{
			id: 1,
			text: "Car revision",
			day: "Nov 29 at 11:00 am",
			reminder: true,
		},
		{
			id: 2,
			text: "Doctor appointment",
			day: "Nov 29 at 3:00 pm",
			reminder: true,
		},
		{
			id: 3,
			text: "Learing react",
			day: "Dec 31 at 11:59 pm",
			reminder: false,
		},
	]);

	return (
		<div className="container">
			<Header />
			<Activities activities={activities} />
		</div>
	);
};

export default App;
