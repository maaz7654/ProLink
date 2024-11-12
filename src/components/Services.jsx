import React from "react";

const services = [
	{
		title: "Inbound Customer Support",
		description:
			"Handle customer inquiries with efficiency and professionalism, providing solutions that lead to high satisfaction rates.",
	},
	{
		title: "Outbound Sales & Lead Generation",
		description:
			"Our experienced team helps you connect with potential customers, driving sales and generating leads.",
	},
	{
		title: "Technical Support",
		description:
			"Specialized support agents assist your customers with technical issues, ensuring quick resolution and satisfaction.",
	},
	{
		title: "Order Processing & Fulfillment",
		description:
			"Efficiently manage orders and fulfill customer requests seamlessly to enhance their experience with your brand.",
	},
];

function Services() {
	return (
		<section
			id="services"
			className="w-full py-12 md:py-24 lg:py-32 bg-[#F5F9FF]"
		>
			<div className="container mx-auto px-4 md:px-6 text-center rounded">
				<h2 className="text-3xl font-bold sm:text-4xl md:text-5xl mb-8 text-gray-800 ">
					Our Services
				</h2>
				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 text-start">
					{services.map((service, index) => (
						<div
							key={index}
							className="flex flex-col p-6 bg-white  rounded-lg shadow-lg"
						>
							<h3 className="text-xl font-bold text-gray-800  mb-2">
								{service.title}
							</h3>
							<p className="text-gray-600 ">{service.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default Services;
