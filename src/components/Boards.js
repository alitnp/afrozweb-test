import "./Boards.css";
import H2 from "./../components/global/H2";
import MiniTitleBlue from "./global/MiniTitleBlue";
import BoardCard from "./BoardCard";
import board1 from "./../asset/images/board1.png";
import board2 from "./../asset/images/board2.png";
import board3 from "./../asset/images/board3.png";
import arrow from "./../asset/images/arrow2.png";
import ReadMore from "./global/ReadMore";
import bgImage from "./../asset/images/bgimage2.png";

const Boards = () => {
	return (
		<div className=" boards">
			<img src={bgImage} alt="" className="bg-image" />
			<div className="titles">
				<MiniTitleBlue>SHOP</MiniTitleBlue>
				<H2>Surfboards</H2>
			</div>
			<div className="cards-container">
				<div className="global-container cards-wrapper">
					<div className="arrow-left">
						<img src={arrow} alt="" />
					</div>
					<BoardCard image={board1} name="Chilli Rare Bird" price={890} />
					<BoardCard image={board2} name="Chilli Rare Bird" price={890} />
					<BoardCard image={board3} name="Chilli Rare Bird" price={890} />
					<div className="arrow-right">
						<img src={arrow} alt="" />
					</div>
				</div>
			</div>
			<ReadMore center />
		</div>
	);
};

export default Boards;
