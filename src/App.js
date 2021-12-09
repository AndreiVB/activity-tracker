import { useState } from "react";
import Header from "./components/Header";
import Activities from "./components/Activities";
import AddActivity from "./components/AddActivity";
import { FaTimes } from "react-icons/fa";

const App = () => {
	const [showAddActivity, setShowAddActivity] = useState(false);
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

	//Add activity

	// const AddActivity = () => {
	// 	console.log('merge');
	// }

	const addActivity = (activity) => {
		const id = Math.floor(Math.random() * 1000) + 1;
		const newActivity = { id, ...activity };
		setActivities([...activities, newActivity]);
	};

	// Delete acitivity

	const deleteActivity = (id) => {
		setActivities(activities.filter((activity) => activity.id !== id));
	};

	// Toogle reminder

	const toggleReminder = (id) => {
		setActivities(
			activities.map((activity) =>
				activity.id === id
					? { ...activity, reminder: !activity.reminder }
					: activity
			)
		);
	};

	return (
		<div className="container">
			<Header
				onAdd={() => setShowAddActivity(!showAddActivity)}
				showAdd={showAddActivity}
			/>
			{showAddActivity && <AddActivity onAdd={addActivity} />}
			{activities.length > 0 ? (
				<Activities
					activities={activities}
					onDelete={deleteActivity}
					onToggle={toggleReminder}
				/>
			) : (
				<p>No activities to show</p>
			)}
		</div>
	);
};

export default App;
