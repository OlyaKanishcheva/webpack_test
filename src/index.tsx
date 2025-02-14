import { createRoot } from 'react-dom/client';
import { App } from './components/App/App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React, { Suspense } from 'react';
import { LazyAbout } from '@/pages/about/About.lazy';
import { LazyShop } from '@/pages/shop/Shop.lazy';

const root = document.getElementById('root');

if (!root) {
    throw new Error('root was not found');
}

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
            path: '/about',
            element: <Suspense fallback="Loading..."><LazyAbout /></Suspense>
        },
        {
            path: '/shop',
            element: <Suspense fallback="Loading..."><LazyShop /></Suspense>
        },
      ]
    },
  ]);

const container = createRoot(root);

container.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);