import "./Footer.css";
import logo from "../asset/images/logo.png";
import tumblrIcon from "../asset/images/tumblr.png";
import twitterIcon from "../asset/images/twitter.png";
import vimeoIcon from "../asset/images/vimeo.png";

const Footer = () => {
	return (
		<footer className="global-container footer">
			<img src={logo} alt="logo" className="logo" />
			<nav className="navigation">
				<li>SORIES</li>
				<li>EVENTS</li>
				<li>PLACES</li>
				<li>BOARDS</li>
			</nav>
			<div className="icons-wrapper">
				<img src={tumblrIcon} alt="tumblr icon" className="icon" />
				<img src={twitterIcon} alt="twitter icon" className="icon" />
				<img src={vimeoIcon} alt="vimeo icon" className="icon" />
			</div>
		</footer>
	);
};

export default Footer;
