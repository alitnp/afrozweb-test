import "./Video.css";
import seaSide from "./../asset/images/sea-side.png";
import seaWave from "./../asset/images/sea-wave2.png";
import ReadMore from "./global/ReadMore";

const Video = () => {
	return (
		<div className="global-container video">
			<div className="pic-text">
				<img src={seaSide} alt="" />
				<div className="text">
					<p className="global-body-text">
						By better understanding the various aspects of surfing, you will
						improve faster and have more fun in the water.
					</p>
					<ReadMore />
				</div>
			</div>
			<div className="player ">
				<img src={seaWave} alt="sea wave" className="global-elevate-shadow" />
			</div>
		</div>
	);
};

export default Video;
