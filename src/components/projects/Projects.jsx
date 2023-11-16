import { useRef } from "react";
import "./projects.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Social Media App with MERN Stack",
    url: "https://www.priders.net",
    img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7",
    desc: "This social media app is built with industry standard technologies featuring React, Nodejs, Express, Mongodb, Amazon S3, react-redux, RTK query, websockets, JWT authentication flow, REST apis, etc. This app was officially launched on 10/06/2022 and now has over 200 registered users and over 50 active posters.",
  },
  {
    id: 2,
    title: "Food Finder App with Next.js/React",
    url: "https://cheap-and-yummy.vercel.app",
    img: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
    desc: "This app utilizes data from Yelp Fusion API and Google Map API. It is built with the newest technologies featuring Nextjs 13 App router, Typescript, Zustand, TailwindCSS, react-query, etc.",
  },
  {
    id: 3,
    title: "E-commerce App with Next.js/React",
    url: "https://junjie-yang-e-commerce-project-60mk4jf6m-junjieyangnextjs.vercel.app",
    img: "https://images.unsplash.com/photo-1557176595-c6fce4b961e7",
    desc: "This app is built with modern technologies featuring Nextjs page router, Typescript, Next-Auth, Firebase, Session authentication flow, styled-components, react-redux, etc.",
  },
  {
    id: 4,
    title: "Discord Clone with Next.js/React",
    url: "https://discordclone-production-6abb.up.railway.app",
    img: "https://images.unsplash.com/photo-1614680376739-414d95ff43df",
    desc: "This app is built with the newest technologies featuring Nextjs 13 App router, Typescript, MySQL, prisma, react-query, zustand, uploadThing, livekit, clerkjs, TailwindCSS, websockets, etc.  Please create your own or sign in with the following gmail accounts for complete experience. Gmail: discordtestaccoun2@gmail.com password: yourpassword Gmail: discordtestaccoun3@gmail.com password: yourpassword",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt={item.title} />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button
              onClick={() =>
                window.open(item.url, "_blank", "noopener,noreferrer")
              }
            >
              See Web App
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="projects" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Projects;
