
import About from "@/components/About/About";
import Background from "../components/Background/Background";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Projects from "@/components/Projects/Projects";

export default function Home() {
  return (
    <>
      {/* BACKGROUND */}
      <Background />

      {/* WEBSITE CONTENT */}
      <div className="site-content">

        {/* HEADER */}
        <Header />

        {/* MAIN CONTENT */}
        <main>
          <Hero />

          {/* FUTURE SECTIONS */}
          <About />
          <Projects />
          {/* <Team /> */}
          {/* <Achievements /> */}
        </main>

        {/* FOOTER */}
        {/* <Footer /> */}

      </div>
    </>
  );
}
