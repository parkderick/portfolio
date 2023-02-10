import Head from "next/head";
import { Box, Container } from "@chakra-ui/react";
import Contact from "src/components/Contact";
import Portfolio from "src/components/Portfolio";
import Experience from "src/components/Experience";
import About from "src/components/About";
import Hero from "src/components/Hero";
import NavBar from "src/components/NavBar";
import Socials from "src/components/Socials";
import Footer from "src/components/Footer";
import Loader from "src/components/Loader";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Home() {

  const [isLoader, setIsLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => AOS.init(), 100);
    setTimeout(() => setIsLoader(false), 3000);
  }, []);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {isLoader ? (
          <Loader />
        ) : (
          <Box>
            <NavBar />
            <Container maxW="1300px" px={{ base: "50px", md: "150px" }}>
              <Hero />
              <About />
              <Experience />
              <Portfolio />
              <Contact />
              <Socials />
              <Footer />
            </Container>
          </Box>
        )}
      </main>
    </>
  );
}
