const Activity = ({ activity }) => {
	return (
		<div className="activity">
			<h3>{activity.text}</h3>
			<p>{activity.day}</p>
		</div>
	);
};

export default Activity;
