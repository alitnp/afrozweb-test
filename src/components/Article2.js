import "./Article2.css";
import pic from "./../asset/images/img3.png";
import ArticleTitle from "./global/ArticleTitle";
import ReadMore from "./global/ReadMore";

const Article2 = () => {
	return (
		<article className="global-container article2">
			<div className="image-wrapper">
				<img src={pic} alt="" />
				<p className="image-caption">Surf Camps</p>
			</div>
			<div className="text-wrapper">
				<ArticleTitle number={"02"} title="Point Break" />
				<p className="text">
					By better understanding the various aspects of surfing, By better
					understanding the various aspects of surfing, you will improve faster
					and have more fun in the water.
				</p>
				<ReadMore />
			</div>
		</article>
	);
};

export default Article2;
