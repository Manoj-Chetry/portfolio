import Theme from "@/components/Theme";
import { Button } from "@/components/ui/button"
import "../../public/fonts/font.css"



export default function Home() {

  return (
    <>
      <nav className="flex justify-between items-center mb-8">
        <h1 id="logo" className="text-green-600 text-lg">MC</h1>
        <ul className="nav-links flex items-center justify-between w-1/5 ">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
        </ul>
        <Theme />
      </nav>
      <main className="nunito-sans">
        <div id="hero">
          <div id="hero-text">
            I AM
            <h1 className="aleo inline text-4xl font-bold mx-4 text-green-600">Manoj Chetry</h1>
            <p>Frontend Developer</p>
            <Button className="text-green-600 hover:bg-green-600 border-green-600 border-2 font-bold" variant="outline">Contact Me</Button>
          </div>
          <div id="hero-img"></div>
        </div>
        <div id="about" className="h-96">About</div>
        <div id="skills" className="h-96 bg-slate-300">My Skills</div>
        <div id="projects">Projects</div>
        <div id="contact">Contact</div>
      </main>
    </>
  );
}
