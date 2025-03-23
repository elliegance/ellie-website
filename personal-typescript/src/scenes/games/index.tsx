import Joystick from "@/assets/Joystick.png";
import ActionButton from "@/shared/ActionButton";
import HeaderText from "@/shared/HeaderText";
import { type GameType, SelectedPage } from "@/shared/types";
import {
	PuzzlePieceIcon,
	SparklesIcon,
	StarIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Game from "./Game";

const games: Array<GameType> = [
	{
		icon: <PuzzlePieceIcon className="h-6 w-6" />,
		title: "Game 1",
		description: "Game one here",
	},
	{
		icon: <StarIcon className="h-6 w-6" />,
		title: "Game 2",
		description: "Game two here",
	},
	{
		icon: <SparklesIcon className="h-6 w-6" />,
		title: "Game 3",
		description: "Game three here",
	},
	{
		icon: <SparklesIcon className="h-6 w-6" />,
		title: "Game 4",
		description: "Game four here",
	},
	{
		icon: <SparklesIcon className="h-6 w-6" />,
		title: "Game 5",
		description: "Game five here",
	},
	{
		icon: <SparklesIcon className="h-6 w-6" />,
		title: "Game 6",

		description: "Game six here",
	},
];

const container = {
	hidden: {},
	visible: {
		transition: { staggerChildren: 0.2 },
	},
};

type Props = {
	setSelectedPage: (value: SelectedPage) => void;
};

const Games = ({ setSelectedPage }: Props) => {
	return (
		<section id="games" className="mx-auto min-h-full w-5/6 py-20">
			<motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Games)}>
				{/* HEADER */}
				<motion.div
					className="md:my-5 md:w-3/5"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.5 }}
					variants={{
						hidden: { opacity: 0, x: -50 },
						visible: { opacity: 1, x: 0 },
					}}
				>
					<HeaderText>GAMES</HeaderText>
					<p className="my-5 text-sm">Enjoy some games made by me.</p>
				</motion.div>

				{/* GAMES */}
				<motion.div
					className="md:flex items-center justify-between gap-8 mt-5"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.5 }}
					variants={container}
				>
					{games.map((game: GameType) => (
						<Game
							key={game.title}
							icon={game.icon}
							title={game.title}
							description={game.description}
							setSelectedPage={setSelectedPage}
						/>
					))}
				</motion.div>
			</motion.div>
		</section>
	);
};

export default Games;
