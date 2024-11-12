import React from "react";

function HeroSection() {
	return (
		<section className="w-full py-12 md:py-24 lg:py-32 px-4">
			<div className="container mx-auto px-4 md:px-6 text-center">
				<h1 className="text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
					Professional Call Center Services Tailored for Your Business Needs
				</h1>
				<p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 py-5">
					Launching Soon! Setting new standards in call center services to help
					businesses build stronger customer relationships and improve
					satisfaction.
				</p>
				<div className="space-x-4 mt-4">
					<button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
						Get Early Access
					</button>
					<button className="border border-blue-600 text-blue-600 hover:bg-blue-100 px-4 py-2 rounded-md">
						Learn More
					</button>
				</div>
			</div>
		</section>
	);
}

export default HeroSection;
