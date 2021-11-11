import Article1 from "./components/Article1";
import Article2 from "./components/Article2";
import BgLines from "./components/BgLines";
import Boards from "./components/Boards";
import Footer from "./components/Footer";
import GetInTouch from "./components/GetInTouch";
import Header from "./components/Header";
import Join from "./components/Join";
import Quote from "./components/Quote";
import Slider from "./components/Slider";
import Video from "./components/Video";

function App() {
	return (
		<>
			<Header />
			<BgLines />
			<Slider />
			<Quote />
			<Video />
			<Boards />
			<Article1 />
			<Article2 />
			<Join />
			<GetInTouch />
			<Footer />
		</>
	);
}

export default App;
