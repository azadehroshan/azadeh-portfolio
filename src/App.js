import Career from "./Components/Career";
import Header from "./Components/Header";
import Profile from "./Components/Profile";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import JobExpriences from "./Components/JobExpriences";

function App() {
  return (
    <main className="main">
      <Header />
      <Profile />
      <Career />
      <About />
      <Projects />
      <Skills />
      <JobExpriences />
    </main>
  );
}

export default App;
