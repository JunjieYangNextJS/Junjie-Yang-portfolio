import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Web Dev Junjie Yang
        </motion.span>
        <div className="social">
          <a
            href="https://www.linkedin.com/in/junjie-yang-848495222/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src="/linkedin.png" alt="linkedin" />
          </a>
          <a
            href="https://github.com/JunjieYangNextJS"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src="/github.png" alt="github" />
          </a>
          <a
            href="https://twitter.com/Jsquareapples"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src="/x.webp" alt="twitter" />
          </a>

          {/* <a href="#">
            <img src="/youtube.png" alt="" />
          </a>
          <a href="#">
            <img src="/dribbble.png" alt="" />
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
