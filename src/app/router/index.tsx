import { createBrowserRouter } from 'react-router-dom';
import MainPage from 'pages/Main';
import NewsPage from 'pages/News';
import NotFoundPage from 'pages/NotFoundPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/:id',
    element: <NewsPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

export default router;
