import MainPage from 'pages/Main';
import NewsPage from 'pages/News';
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
]);

export default router;
