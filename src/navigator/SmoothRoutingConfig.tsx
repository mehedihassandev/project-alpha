import React, { lazy, Suspense, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Loader } from "../components/Loader";
import { Contact } from "../pages/Contact";

const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Projects = lazy(() => import("../pages/Projects"));
const Experience = lazy(() => import("../pages/Experience"));

export const SmoothRoutingConfig = () => {
    const location = useLocation();

    useEffect(() => {
        const sectionId =
            location.pathname === "/" ? "home" : location.pathname.substring(1);
        const sectionElement = document.getElementById(sectionId);
        if (sectionElement) {
            sectionElement.scrollIntoView({ behavior: "smooth" });
        }
    }, [location]);

    return (
        <Suspense fallback={<Loader />}>
            <div>
                <div id="home">
                    <Home />
                </div>
                <div id="about">
                    <About />
                </div>
                <div id="experience">
                    <Experience />
                </div>
                <div id="project">
                    <Projects />
                </div>
                <div id="contact">
                    <Contact />
                </div>
            </div>
        </Suspense>
    );
};

export default SmoothRoutingConfig;
