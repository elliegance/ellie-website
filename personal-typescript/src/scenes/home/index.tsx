import { SelectedPage } from '@/shared/types'
import useMediaQuery from '@/hooks/useMediaQuery'
import ActionButton from '@/shared/ActionButton'
import EllieMartinson from '@/assets/EllieMartinson.png'
import BinaryLaptop from '@/assets/BinaryLaptop.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

type Props = {
    setSelectedPage: (value: SelectedPage) =>void
}

function Home({setSelectedPage}: Props) {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")
  return <section
    id="home"
    className="gap-16 bg-gray-20 py-10 md:h-full"
  >
    {/* IMAGE AND MAIN HEADER */}
    <div className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6">
        {/* MAIN HEADER */}
        <div className="z-10 mt-32 md:basis-3/5">
            {/* HEADINGS */}
            <div>
                <div>
                    <img alt="ellie-martinson" src={EllieMartinson}/>
                </div>
            </div>
            <p>
                Hi! I am Ellie Martinson. I am a Software Engineer with experience in front end UI development. 
                I have a passion for creating great user experiences.  Even more text about myself and what I do. Text words and characters all in one! Typing and telling about myself in this portion!
            </p>
        </div>
        {/* ACTIONS */}
        <div>
            <ActionButton setSelectedPage={setSelectedPage}>
                See Some Projects
            </ActionButton>
            <AnchorLink
                className = "text-sm font-bold text-primary-500 underline hover:text-secondary-500"
                onClick={() => setSelectedPage(SelectedPage.Projects)}
                href={`#${SelectedPage.Projects}`}
            >

            </AnchorLink>
        </div>
        {/* IMAGE */}
        <div>
            <img alt="binary-laptop" src={BinaryLaptop}/>
        </div>
    </div>
  </section>
}

export default Home