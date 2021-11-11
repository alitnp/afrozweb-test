import "./Header.css";
import logo from "../asset/images/logo.png";

const Header = () => {
	return (
		<div className="global-container header">
			<img src={logo} alt="logo" className="logo" />
			<nav className="navbar">
				<li className="nav-element">STORIES</li>
				<li className="nav-element">EVENTS</li>
				<li className="nav-element">PLACES</li>
				<li className="nav-element">BOARDS</li>
			</nav>
		</div>
	);
};

export default Header;
