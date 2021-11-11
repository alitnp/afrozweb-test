import "./GetInTouch.css";
import pic from "./../asset/images/img4.png";

const GetInTouch = () => {
	return (
		<div className="get-in-touch">
			<img src={pic} alt="beach" />
			<div className="text-wrapper">
				<p className="mini-title">OUR CAMP</p>
				<p className="adress">
					CA 91932, USA
					<br />
					Imperial Beach 560
					<br />
					Silver Strand Blvd
				</p>
				<p className="link">GET IN TOUCH</p>
			</div>
		</div>
	);
};

export default GetInTouch;
