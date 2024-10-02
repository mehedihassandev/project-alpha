import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loader from '../components/Loader';
import { ROUTES } from './route-constant';

export const RouterConfig = () => {
  const Home = lazy(() => import('../pages/Home'));
  const About = lazy(() => import('../pages/About'));
  const Projects = lazy(() => import('../pages/Projects'));
  const Experience = lazy(() => import('../pages/Experience'));
  const Contact = lazy(() => import('../pages/Contact'));

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.ABOUT} element={<About />} />
        <Route path={ROUTES.EXPERIENCE} element={<Experience />} />
        <Route path={ROUTES.PROJECT} element={<Projects />} />
        <Route path={ROUTES.CONTACT} element={<Contact />} />
      </Routes>
    </Suspense>
  );
};

export default RouterConfig;
