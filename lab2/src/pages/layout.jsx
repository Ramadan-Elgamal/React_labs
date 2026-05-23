import { Outlet } from 'react-router';
import { Navbar } from '../components/NavBar';
import Footer from '../components/Footer';

export const Layout = ({ children }) => {
    return (
        <>
        <Navbar />
        <Outlet />
        <Footer />
        </>
    )
}