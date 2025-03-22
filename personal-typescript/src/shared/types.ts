
export enum SelectedPage {
  Home = "home", 
  AboutMe = "aboutme",
  Games = "games",
  Projects = "projects",
  ContactMe = "contactme"
}

export interface GameType {
  icon: JSX.Element,
  title: string,
  description: string
}