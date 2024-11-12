import React from "react";
import {
	FiHeadphones,
	FiMessageSquare,
	FiClock,
	FiPhone,
} from "react-icons/fi";

const features = [
	{
		icon: FiHeadphones,
		title: "Customer-Centric Approach",
		description:
			"We prioritize your customers' experience in every interaction, ensuring they receive professional, friendly support.",
	},
	{
		icon: FiMessageSquare,
		title: "Industry-Specific Expertise",
		description:
			"Our call center solutions are tailored to fit a range of industries, including retail, healthcare, finance, and technology.",
	},
	{
		icon: FiClock,
		title: "Flexible, Scalable Solutions",
		description:
			"Whether you're a small business or a large enterprise, our services are designed to grow with you.",
	},
	{
		icon: FiPhone,
		title: "Around-the-Clock Support",
		description:
			"We offer 24/7 availability to ensure that your customers get the support they need, whenever they need it.",
	},
];

function Features() {
	return (
		<section id="features" className="w-full py-12 md:py-24 lg:py-32">
			<div className="container mx-auto px-4 md:px-6 text-center bg-[#EFF6FF] py-44">
				<h2 className="text-3xl font-bold sm:text-4xl md:text-5xl mb-8 text-[#1F2937] ">
					Why Choose ProLink Support?
				</h2>
				<div className="grid gap-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 px-16 ">
					{features.map((feature, index) => (
						<div
							key={index}
							className="flex flex-col items-center justify-evenly p-6 bg-white  rounded-lg shadow-lg"
						>
							<feature.icon className="h-12 w-12 text-blue-600  mb-2" />
							<h3 className="text-xl font-bold text-gray-800 ">
								{feature.title}
							</h3>
							<p className="text-sm text-gray-500 p-3">{feature.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default Features;
