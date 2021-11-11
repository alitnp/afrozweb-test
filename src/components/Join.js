import "./Join.css";
import inputStyle from "./global/input.module.css";
import H2 from "./global/H2";
import arrow from "../asset/images/arrow.png";
import bgImage from "../asset/images/bgimage.png";

const Join = () => {
	return (
		<div className="global-container join">
			<img src={bgImage} alt="" className="bg-image" />
			<div className="vertical-line" />
			<div className="text">
				<H2>Join The Club</H2>
				<p>
					By better understanding the various aspects of surfing, you will
					improve faster and have more fun in the water.
				</p>
			</div>
			<div className="input-wrapper">
				<input
					type="text"
					className={inputStyle.input}
					placeholder="YOUR E-MAIL"
				/>
				<button>
					<img src={arrow} alt="arrow" />
				</button>
			</div>
		</div>
	);
};

export default Join;
