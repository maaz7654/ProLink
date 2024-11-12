// About.jsx
import React from "react";

const About = () => {
	return (
		<section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-[#F9FAFB]">
			<div className="container mx-auto px-4 md:px-6">
				<div className="flex flex-col items-center space-y-4 text-center">
					<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-800">
						About ProLink Support
					</h2>
					<p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
						ProLink Support is committed to delivering top-notch customer
						service solutions that help businesses grow by strengthening their
						relationship with customers.
					</p>
					<p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
						Our team of professionals brings a wealth of experience across
						various industries, ensuring we can tailor our solutions to meet the
						unique needs of your business. Trust ProLink to be your partner in
						achieving exceptional customer satisfaction.
					</p>
				</div>
			</div>
		</section>
	);
};

export default About;
