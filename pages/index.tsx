import About from "./components/About";
import Layout from "./components/Layout";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <>
      <Layout>
        <About />
        <Skills />
        <Projects />
      </Layout>
    </>
  );
}
