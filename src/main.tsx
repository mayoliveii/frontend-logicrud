import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Hero from './components/Hero/Hero.tsx';
import NavBar from './components/Navbar/Navbar.tsx';
import VehicleList from './components/VehicleList/VehicleList.tsx';
import { Team } from './components/Team/Team.tsx';
import About from './components/About/About.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Hero />,
  },
  {
    path: "/vehicle-list",
    element: <VehicleList />,
  },
  {
    path: "/team",
    element: <Team />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider>
      <NavBar />
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>,
)