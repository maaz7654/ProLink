import React, { useState, useEffect } from "react";
import { FiPhone } from "react-icons/fi";
import { FiMenu, FiX } from "react-icons/fi"; // For hamburger and close icon

function Header() {
	// Track the menu visibility for mobile
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	// Apply smooth scrolling when component mounts
	useEffect(() => {
		document.documentElement.style.scrollBehavior = "smooth";
	}, []);

	// Toggle mobile menu visibility
	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	return (
		<header className="px-4 lg:px-6 h-16 flex items-center bg-white shadow-md sticky top-0 z-50">
			<a href="/" className="flex items-center justify-center">
				<FiPhone className="h-6 w-6 text-blue-600" />
				<span className="ml-2 text-xl font-bold text-black">
					ProLink Support
				</span>
			</a>

			{/* Mobile Hamburger Menu Button */}
			<button
				className="lg:hidden ml-auto flex items-center text-black"
				onClick={toggleMobileMenu}
				aria-expanded={isMobileMenuOpen ? "true" : "false"}
			>
				{isMobileMenuOpen ? (
					<FiX className="h-6 w-6 text-black" />
				) : (
					<FiMenu className="h-6 w-6 text-black" />
				)}
			</button>

			{/* Desktop Navigation */}
			<nav className="ml-auto hidden lg:flex gap-4 sm:gap-6">
				<a
					className="text-sm font-medium text-black hover:text-blue-600 transition-colors duration-200"
					href="#features"
				>
					Features
				</a>
				<a
					className="text-sm font-medium text-black hover:text-blue-600 transition-colors duration-200"
					href="#services"
				>
					Services
				</a>
				<a
					className="text-sm font-medium text-black hover:text-blue-600 transition-colors duration-200"
					href="#early-access"
				>
					Early Access
				</a>
				<a
					className="text-sm font-medium text-black hover:text-blue-600 transition-colors duration-200"
					href="#about"
				>
					About
				</a>
			</nav>

			{/* Mobile Navigation Menu */}
			<div
				className={`lg:hidden fixed inset-0 bg-white shadow-lg z-10 transform ${
					isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
				} transition-transform duration-300`}
			>
				<nav className="flex flex-col items-center pt-20">
					<a
						className="text-lg font-medium text-black py-2 hover:text-blue-600 transition-colors duration-200"
						href="#features"
						onClick={toggleMobileMenu}
					>
						Features
					</a>
					<a
						className="text-lg font-medium text-black py-2 hover:text-blue-600 transition-colors duration-200"
						href="#services"
						onClick={toggleMobileMenu}
					>
						Services
					</a>
					<a
						className="text-lg font-medium text-black py-2 hover:text-blue-600 transition-colors duration-200"
						href="#early-access"
						onClick={toggleMobileMenu}
					>
						Early Access
					</a>
					<a
						className="text-lg font-medium text-black py-2 hover:text-blue-600 transition-colors duration-200"
						href="#about"
						onClick={toggleMobileMenu}
					>
						About
					</a>
				</nav>
			</div>
		</header>
	);
}

export default Header;
