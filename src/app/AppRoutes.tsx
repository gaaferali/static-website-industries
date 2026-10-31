import { Navigate, Route, Routes } from 'react-router-dom';
import SiteLayout from '../components/layout/SiteLayout';
import AIServicePage from '../pages/ai-services/AIServicePage';
import ContactPage from '../pages/contact/ContactPage';
import HomePage from '../pages/home/HomePage';
import ServiceDetailPage from '../pages/service-detail/ServiceDetailPage';

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        <Route path="services/:serviceId" element={<ServiceDetailPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="ai-services" element={<AIServicePage />} />
        <Route path="ai-service" element={<AIServicePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
