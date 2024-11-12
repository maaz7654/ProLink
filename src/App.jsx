import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import Services from "./components/Services";
import EarlyAccess from "./components/EarlyAccess";
import About from "./components/About";
import GetInTouch from "./components/GetInTouch";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="bg-[#F0F6FF]">
			<Header />
			<HeroSection />
			<Features />
			<Services />
			<EarlyAccess />
			<About />
			<GetInTouch />
			<Footer />
		</div>
	);
}

export default App;
