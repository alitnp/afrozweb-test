import "./BoardCard.css";
import H4 from "../components/global/H4";
import pic from "./../asset/images/board1.png";

const BoardCard = ({ image, name, price }) => {
	return (
		<div className="board-card">
			<p className="image-wrapper">
				<img src={image} alt="" />
				<div className="rectangle" />
			</p>
			<div className="text">
				<div className="titles">
					<p>FUNBOARDS</p>
					<H4>{name}</H4>
				</div>
				<p className="global-body-text">{"$ " + price}</p>
				<p className="global-small-title">BUY</p>
			</div>
		</div>
	);
};

export default BoardCard;
