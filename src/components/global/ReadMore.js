const ReadMore = ({ center }) => {
	return (
		<p
			className="global-small-title"
			style={{
				borderBottom: "2px solid var(--main-color)",
				margin: center ? "0 auto" : "",
			}}
		>
			READ MORE
		</p>
	);
};

export default ReadMore;
