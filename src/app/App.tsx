import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from '../components/layout/ScrollToTop';
import AppRoutes from './AppRoutes';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppRoutes />
    </BrowserRouter>
  );
}
