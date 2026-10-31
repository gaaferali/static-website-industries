import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';
import './SiteLayout.css';

export default function SiteLayout() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
