import { FaTimes } from "react-icons/fa";

const Activity = ({ activity, onDelete, onToggle }) => {
	return (
		<div
			className={`activity ${activity.reminder ? "reminder" : ""}`}
			onDoubleClick={() => onToggle(activity.id)}
		>
			<h3>
				{activity.text}{" "}
				<FaTimes
					style={{ color: "red", cursor: "pointer" }}
					onClick={() => onDelete(activity.id)}
				/>
			</h3>
			<p>{activity.day}</p>
		</div>
	);
};

export default Activity;
