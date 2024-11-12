// EarlyAccess.jsx
import { useState } from "react";

const EarlyAccess = () => {
	const [formData, setFormData] = useState({
		businessName: "",
		email: "",
		phoneNumber: "",
		consultationTime: "",
		industry: "",
		serviceInterest: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Handle form submission logic here
		console.log("Submitted:", formData);
	};

	return (
		<section
			id="early-access"
			className="w-full py-12 md:py-24 lg:py-32 bg-[#F9FAFB]"
		>
			<div className="container mx-auto px-4 md:px-6">
				<div className="flex flex-col items-center space-y-4 text-center">
					<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-800 ">
						Join Our Early Access List
					</h2>
					<p className="mx-auto max-w-[700px] text-gray-500 md:text-xl ">
						Be one of our first partners! Fill out the form below to learn how
						ProLink Support can provide customized call center services to meet
						your business needs.
					</p>
					<div className="w-full max-w-md space-y-2">
						<form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
							<input
								className="rounded-lg border-2 p-2 text-gray-500"
								placeholder="Business Name"
								name="businessName"
								value={formData.businessName}
								onChange={handleChange}
								type="text"
							/>
							<input
								className="rounded-lg border-2 p-2 text-gray-500"
								placeholder="Email"
								name="email"
								value={formData.email}
								onChange={handleChange}
								type="email"
							/>
							<input
								className="rounded-lg border-2 p-2 text-gray-500"
								placeholder="Phone Number"
								name="phoneNumber"
								value={formData.phoneNumber}
								onChange={handleChange}
								type="tel"
							/>
							<input
								className="rounded-lg border-2 p-2 text-gray-500"
								placeholder="Preferred Consultation Time"
								name="consultationTime"
								value={formData.consultationTime}
								onChange={handleChange}
								type="text"
							/>
							<select
								name="industry"
								value={formData.industry}
								onChange={handleChange}
								className="w-full p-2 bg-white border border-gray-300 rounded-lg"
							>
								<option value="">Select Your Industry</option>
								<option value="retail">Retail</option>
								<option value="healthcare">Healthcare</option>
								<option value="finance">Finance</option>
								<option value="technology">Technology</option>
								<option value="other">Other</option>
							</select>
							<select
								name="serviceInterest"
								value={formData.serviceInterest}
								onChange={handleChange}
								className="w-full p-2 bg-white  border-gray-300 rounded-lg"
							>
								<option value="">Select Service Interest</option>
								<option value="inbound">Inbound Support</option>
								<option value="outbound">Outbound Sales</option>
								<option value="technical">Technical Support</option>
								<option value="order">Order Processing</option>
							</select>
							<button
								type="submit"
								className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-2"
							>
								Request Early Access Consultation
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default EarlyAccess;
