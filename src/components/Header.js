import PropTypes from "prop-types";
import Button from "./Button";

export const Header = ({ title }) => {
	const onClick = () => {
		console.log("click");
	};
	return (
		<header className="header">
			<h1>{title}</h1>
			<Button color="green" text="Add" onClick={onClick} />
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
