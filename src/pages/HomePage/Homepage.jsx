import Hero from "./components/Hero";
import PopularCourses from "./components/PopularCourses";
import Testimonial from "./components/Testimonial";
import Newsletter from "./components/Newsletter";

const Homepage = () => {
  return (
    <main className="flex-1">
      <Hero />
      <PopularCourses />
      <Testimonial />
      <Newsletter />
    </main>
  );
};

export default Homepage;
