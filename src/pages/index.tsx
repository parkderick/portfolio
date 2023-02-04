import Head from "next/head";
import { Box, Container } from "@chakra-ui/react";
import Contact from "src/components/Contact";
import Portfolio from "src/components/Portfolio";
import Experience from "src/components/Experience";
import About from "src/components/About";
import Hero from "src/components/Hero";
import NavBar from "src/components/NavBar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Box>
          <NavBar />
          <Container maxW="1100px" px={{base: '50px', md: '100px'}}>
            <Hero />
            <About />
            <Experience />
            <Portfolio />
            <Contact />
          </Container>
        </Box>
      </main>
    </>
  );
}
