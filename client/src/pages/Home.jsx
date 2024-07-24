
import { Hero, Footer, Reviews, Flex, People, Products , Pricing } from "../sections/Homepage";
import Navbar from "../components/Nav";
import Loading from "../components/loading";
import { useState, useEffect } from "react"; // Import useEffect


const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <main className="">
      {loading ? (
        <Loading />
      ) : (
        <>
          <section className="">
            <Navbar />
          </section>
          <section className="">
            <Hero />
          </section>
          <section className="">
            <Flex />
          </section>
          <section className="">
            <Products />
          </section>
          <section className="">
            <People />
          </section>
          <section className="">
            <Pricing/>
          </section>
          <section className="">
            <Reviews />
          </section>
          <section className="">
            <Footer />
          </section>
        </>
      )}
    </main>
  );
};

export default Home;
