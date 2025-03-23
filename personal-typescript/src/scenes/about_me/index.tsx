import AboutMePic from "@/assets/AboutMe.png";
import HeaderText from "@/shared/HeaderText";
import { SelectedPage } from "@/shared/types";
import {
	AcademicCapIcon,
	HomeModernIcon,
	UserGroupIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

type Props = {
	setSelectedPage: (value: SelectedPage) => void;
};

const AboutMe = ({ setSelectedPage }: Props) => {
	return (
		<section id="about-me" className="mx-auto min-h-full w-5/6 py-20">
			<motion.div onViewportEnter={() => setSelectedPage(SelectedPage.AboutMe)}>
				<div>
					{/* HEADER */}
					<div className="md:my-5 text-sm">
						<HeaderText>ABOUT ME</HeaderText>
						<p className="my-5 text-sm">
							I am a highly motivated software engineer passionate about
							customer experience. I am eager to leverage technical skills for
							innovative projects.
						</p>
					</div>
					{/* IMAGE */}
					<div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
						<img alt="about-me" src={AboutMePic} />
					</div>
				</div>
			</motion.div>
		</section>
	);
};

export default AboutMe;
