import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => (
    <div className='footer'>
    <Link to={`/mentionslegales`} className="footer-element">Mention Légales</Link>
    <Link to={`/contact`} className="footer-element">Contactez-nous</Link>
    </div>
);

export default Footer ;