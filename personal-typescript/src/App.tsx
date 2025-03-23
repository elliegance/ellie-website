import AboutMe from "@/scenes/about_me";
import Games from "@/scenes/games";
import Home from "@/scenes/home";
import Navbar from "@/scenes/navbar";
import { SelectedPage } from "@/shared/types";
import { useEffect, useState } from "react";

function App() {
	const [selectedPage, setSelectedPage] = useState<SelectedPage>(
		SelectedPage.Home,
	);

	const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY === 0) {
				setIsTopOfPage(true);
				setSelectedPage(SelectedPage.Home);
			}
			if (window.scrollY !== 0) setIsTopOfPage(false);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div className="app bg-gray-20">
			<Navbar
				isTopOfPage={isTopOfPage}
				selectedPage={selectedPage}
				setSelectedPage={setSelectedPage}
			/>
			<Home setSelectedPage={setSelectedPage} />
			<AboutMe setSelectedPage={setSelectedPage} />
			<Games setSelectedPage={setSelectedPage} />
		</div>
	);
}

export default App;
