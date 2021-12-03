import Activity from "./Activity";

const Activities = ({ activities }) => {
	return (
		<>
			{activities.map((activity) => (
				<Activity key={activity.id} activity={activity} />
			))}
		</>
	);
};

export default Activities;
