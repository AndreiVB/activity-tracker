import { useState } from "react";

const AddActivity = ({ onAdd }) => {
	const [text, setText] = useState("");
	const [day, setDay] = useState("");
	const [reminder, setReminder] = useState(false);

	const onSubmit = (e) => {
		e.preventDefault();

		if (!text) {
			alert("Please add an activity");
			return;
		}

		onAdd({ text, day, reminder });

		setText("");
		setDay("");
		setReminder(false);
	};

	return (
		<form className="add-form" onSubmit={onSubmit}>
			<div className="form-control">
				<label>Activity</label>
				<input
					type="text"
					placeholder="Add activity"
					value={text}
					onChange={(e) => setText(e.target.value)}
				/>
			</div>
			<div className="form-control">
				<label>Day & Time</label>
				<input
					type="text"
					placeholder="Add day and time"
					value={day}
					onChange={(e) => setDay(e.target.value)}
				/>
			</div>
			<div className="form-control form-control-check">
				<label>Set reminder</label>
				<input
					type="checkbox"
					checked={reminder}
					value={reminder}
					onChange={(e) => setReminder(e.currentTarget.checked)}
				/>
			</div>

			<input type="submit" value="Save activity" className="btn btn-block" />
		</form>
	);
};

export default AddActivity;
