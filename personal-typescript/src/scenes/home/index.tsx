import BinaryLaptop from "@/assets/BinaryLaptop.png";
import EllieMartinson from "@/assets/EllieMartinson.png";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
	setSelectedPage: (value: SelectedPage) => void;
};

function Home({ setSelectedPage }: Props) {
	const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
	return (
		<section id="home" className="gap-16 bg-gray-20 py-10 md:h-full">
			{/* IMAGE AND MAIN HEADER */}
			<motion.div
				className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6"
				onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
			>
				{/* MAIN HEADER */}
				<div className="z-10 mt-32 md:basis-3/5">
					{/* HEADINGS */}
					<motion.div
						className="md:-mt-20"
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.5 }}
						transition={{ duration: 0.5 }}
						variants={{
							hidden: { opacity: 0, x: -50 },
							visible: { opacity: 1, x: 0 },
						}}
					>
						<div className="relative">
							<div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
								<img alt="ellie-martinson" src={EllieMartinson} />
							</div>
						</div>
						<p className="mt-8 text-sm">
							Hi! I am Ellie Martinson. I am a Software Engineer with experience
							in front end UI development. I have a passion for creating great
							user experiences. Even more text about myself and what I do. Text
							words and characters all in one! Typing and telling about myself
							in this portion!
						</p>
					</motion.div>
				</div>
				{/* ACTIONS */}
				<motion.div
					className="mt-8 flex items-center gap-8"
					initial="hidden"



					whileInView="visible"
					viewport={{ once: true, amount: 0.5 }}
					transition={{ delay: 0.2, duration: 0.5 }}
					variants={{
						hidden: { opacity: 0, x: -50 },
						visible: { opacity: 1, x: 0 },
					}}
				>
					<ActionButton setSelectedPage={setSelectedPage}>
						My Projects
					</ActionButton>
					<AnchorLink
						className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
						onClick={() => setSelectedPage(SelectedPage.Projects)}
						href={`#${SelectedPage.Projects}`}
					></AnchorLink>
				</motion.div>
				{/* IMAGE */}
				<div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
					<img alt="binary-laptop" src={BinaryLaptop} />
				</div>
			</motion.div>
		</section>
	);
}

export default Home;
