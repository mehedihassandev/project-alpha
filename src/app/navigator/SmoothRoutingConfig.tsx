import React, { lazy, Suspense, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Loader } from '../components/Loader';
import { ROUTES } from './route-constant';

const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Projects = lazy(() => import('../pages/Projects'));
const Experience = lazy(() => import('../pages/Experience'));
const Contact = lazy(() => import('../pages/Contact'));
const NotFound = lazy(() => import('../components/404'));

export const SmoothRoutingConfig = () => {
  const location = useLocation();

  useEffect(() => {
    const sectionId =
      location.pathname === '/' ? 'home' : location.pathname.substring(1);
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  const validPaths = [
    ROUTES.HOME,
    ROUTES.ABOUT,
    ROUTES.EXPERIENCE,
    ROUTES.PROJECT,
    ROUTES.CONTACT
  ];
  const isValidPath = validPaths.includes(location.pathname);

  return (
    <Suspense fallback={<Loader />}>
      {isValidPath ? (
        <section>
          <section id="home">
            <Home />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="experience">
            <Experience />
          </section>
          <section id="project">
            <Projects />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </section>
      ) : (
        <NotFound />
      )}
    </Suspense>
  );
};

export default SmoothRoutingConfig;
