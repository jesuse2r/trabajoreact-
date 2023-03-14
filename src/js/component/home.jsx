import React from "react";
import Hero from "./Hero.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";
import NavBar from "./NavBar.jsx"
import "bootstrap/dist/css/bootstrap.css";

``


//create your first component
function Home  () {
	return (
		<div>
			<Hero />
			<Card />
			<Footer />
			<NavBar />
		</div>
	);
}


export default Home;

