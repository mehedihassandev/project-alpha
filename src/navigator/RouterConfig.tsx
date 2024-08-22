import React, { lazy, Suspense } from "react";
import Layout from "../components/Layout";
import { Route, Routes } from "react-router-dom";

const RouterConfig = () => {
    const Home = lazy(() => import("../pages/Home"));
    const About = lazy(() => import("../pages/About"));
    const Projects = lazy(() => import("../pages/Projects"));
    const Experience = lazy(() => import("../pages/Experience"));

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/project" element={<Projects />} />
            </Routes>
        </Suspense>
    );
};

export default RouterConfig;
