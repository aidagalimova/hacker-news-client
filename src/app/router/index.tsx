import MainPage from 'pages/Main';
import NewsPage from 'pages/News';
import NotFoundPage from 'pages/NotFoundPage';
import { createBrowserRouter } from 'react-router-dom';

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
