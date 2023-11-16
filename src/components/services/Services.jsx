import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I always adapt and learn new things
          <br /> and put them to great use
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <p style={{ fontSize: "34px", paddingBottom: "80px" }}>
            <motion.b whileHover={{ color: "orange" }}>
              I am a hands-on guy
            </motion.b>{" "}
            who can build your web apps from scratch and escalate your web apps
            to the next level.
          </p>
        </div>
        <div className="title">
          <p style={{ fontSize: "34px" }}>
            <motion.b whileHover={{ color: "orange" }}>
              I have great expertises on,
            </motion.b>{" "}
            including but not limited to, the followings:
          </p>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Working with Frontend</h2>
          <ul>
            <li>React</li>
            <li>NextJS</li>
            <li>Redux</li>
            <li>Zustand</li>
            <li>Typescript</li>
            <li>Animations</li>
            <li>Frontend SEO</li>
            <li>Cypress</li>
          </ul>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Working with Backend</h2>
          <ul style={{ fontSize: "20px" }}>
            <li>NodeJS</li>
            <li>ExpressJS</li>
            <li>NextJS</li>
            <li>Sessions/JWT</li>
            <li>Typescript</li>
            <li>Amazon S3/UploadThing</li>
            <li>Backend SEO</li>
            <li>Websockets</li>
          </ul>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Working with Data</h2>
          <ul style={{ fontSize: "20px" }}>
            <li>MongoDB</li>
            <li>MySQL</li>
            <li>Firebase</li>
            <li>Prisma</li>
            <li>REST Api</li>
            <li>GraphQL</li>
            <li>RTK Query</li>
            <li>React Query</li>
          </ul>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Building UI</h2>
          <ul style={{ fontSize: "20px" }}>
            <li>CSS style sheet</li>
            <li>HTML</li>
            <li>TailwindCSS</li>
            <li>SCSS</li>
            <li>Styled Components</li>
            <li>Material UI</li>
            <li>Shadcn/ui</li>
            <li>Mantine</li>
          </ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
