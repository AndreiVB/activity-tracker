import Activity from "./Activity";

const Activities = ({ activities, onDelete, onToggle }) => {
	return (
		<>
			{activities.map((activity) => (
				<Activity
					key={activity.id}
					activity={activity}
					onDelete={onDelete}
					onToggle={onToggle}
				/>
			))}
		</>
	);
};

export default Activities;
