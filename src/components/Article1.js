import "./Article1.css";
import ArticleTitle from "./global/ArticleTitle";
import ReadMore from "./global/ReadMore";
import pic from "./../asset/images/surfing.png";

const Article1 = () => {
	return (
		<article className="global-container article1">
			<div className="text-wrapper">
				<ArticleTitle number={"01"} title="Surf Training" />
				<p className="text">
					By better understanding the various aspects of surfing, By better
					understanding the various aspects of surfing, you will improve faster
					and have more fun in the water.
				</p>
				<ReadMore />
			</div>
			<div className="image-wrapper">
				<img src={pic} alt="surfing" />
				<p className="image-caption">Surf Camps</p>
			</div>
		</article>
	);
};

export default Article1;
