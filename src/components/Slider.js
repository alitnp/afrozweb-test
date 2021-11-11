import "./Slider.css";
import pic from "../asset/images/sea-wave.png";
import arrow from "../asset/images/arrow.png";
import H1 from "./global/H1";
import MiniTitleBlue from "./global/MiniTitleBlue";
import tumblrIcon from "../asset/images/tumblr.png";
import twitterIcon from "../asset/images/twitter.png";
import vimeoIcon from "../asset/images/vimeo.png";

const Slider = () => {
	return (
		<div className="global-container slider">
			<div className="verticle">
				<p>FIRST SURFING MAGAZINE</p>
				<div className="icons-wrapper">
					{" "}
					<img src={tumblrIcon} alt="tumblr icon" className="icon" />
					<img src={twitterIcon} alt="twitter icon" className="icon" />
					<img src={vimeoIcon} alt="vimeo icon" className="icon" />
				</div>
			</div>
			<div className="picture-wrapper">
				<img src={pic} alt="sea wave" className="image global-elevate-shadow" />
				<div className="slider-navigator">
					<img src={arrow} alt="" />

					<span>1</span>
					<span>{"/"}</span>
					<span>5</span>

					<img src={arrow} alt="" />
				</div>
			</div>
			<div className="text-wrapper">
				<MiniTitleBlue>YOUR</MiniTitleBlue>
				<H1>Beautiful Escape</H1>
				<p className="global-body-text text">
					One of the greatest things about the sport of surfing is that you need
					only three things: your body, a surfboard, and a wave.
				</p>
			</div>
		</div>
	);
};

export default Slider;
