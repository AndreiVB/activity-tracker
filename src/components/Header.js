import PropTypes from "prop-types";
import Button from "./Button";

export const Header = ({ title, onAdd, showAdd }) => {
	return (
		<header className="header">
			<h1>{title}</h1>
			<Button
				color={showAdd ? "red" : "green"}
				text={showAdd ? "Close" : "Add activity"}
				onClick={onAdd}
			/>
		</header>
	);
};

Header.defaultProps = {
	title: "Activity tracker",
};

Header.propTypes = {
	title: PropTypes.string.isRequired,
};

// can do css in JS
// const headingStyle = {
// 	color: "green",
// 	backgroundColor: "yellow",
// };

export default Header;
