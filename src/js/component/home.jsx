import React, {useState} from "react";

//create your first component
const Home = () => {
	// selectedColor is initially set to blank
	const [ selectedcolor, setSelectedColor ] = useState("")
	return (
		<div className="center">
			<div className="wire"></div>
			<div className="box">
				<div 
				onClick={() => setSelectedColor('red')} 
				className={"light red " + (selectedcolor === "red" ? "ambient" : "")} >
				</div>

				<div 
				onClick={() => setSelectedColor('yellow')}
				className={"light yellow " + (selectedcolor === "yellow" ? "ambient" : "")}></div>

				<div 
				onClick={() => setSelectedColor('green')}
				className={"light green " + (selectedcolor === "green" ? "ambient" : "")}></div>

				<button 
				onClick={() => setSelectedColor('purple')}
				className={"" + (selectedcolor === "purple" ? "light purple ambient box2" : "")}>
					Click to see Purple!
					</button>
			</div>
		</div>
	);
};

export default Home;
