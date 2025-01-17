import {SelectedPage} from '@/shared/types'
import { motion } from 'framer-motion'
import HeaderText from '@/shared/HeaderText'
import Joystick from '@/assets/Joystick.png'


type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const Games = ({setSelectedPage}: Props) => {
  return (
    <section id="games" className = "mx-auto min-h-full w-5/6 py-20" >
        <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.Games)}
        >
            <div>
                {/* HEADER */}
                <div className="md:my-5 text-sm">
                    <HeaderText>GAMES</HeaderText>
                        <p className="my-5 text-sm">
                            Enjoy some games made by me. 
                        </p>
                        <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt16 md-justify-items-end">
                            <img alt="joystick" src={Joystick} />
                        </div>
                </div>
            </div>
        </motion.div>
    </section>
  )
}

export default Games