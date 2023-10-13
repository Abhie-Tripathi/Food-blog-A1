import About from "../components/app/Home/About";
import Articles from "../components/app/Home/Articles";
import Hero from "../components/app/Home/Hero";

const Home = () => {
  return (
    <>
      {/* Hero pizza section */}
      <Hero />
      <About />
      <Articles />
    </>
  );
};
export default Home;
