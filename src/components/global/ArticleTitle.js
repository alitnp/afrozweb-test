import "./ArticleTitle.css";
import H2 from "./../global/H2";

const ArticleTitle = ({ number, title }) => {
	return (
		<div className="article-title">
			<div className="title">
				<H2>{title}</H2>
			</div>
			<p className="number">{number}</p>
			<div className="underlline" />
		</div>
	);
};

export default ArticleTitle;
