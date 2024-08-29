import React from 'react';
import '../css/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3 className="footer-title">Stay Connected</h3>
        <ul className="footer-socials">
          <li>
            <a href="https://github.com/shaikh-vahab" target="_blank" rel="noopener noreferrer">GitHub</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/vahab-shaikh-b79679295/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </li>
          <li>
            <a href="https://www.naukri.com/mnjuser/profile" target="_blank" rel="noopener noreferrer">Naukri.Com</a>
          </li>
          <li>
            <a href="https://medium.com/@yourusername" target="_blank" rel="noopener noreferrer">Blog</a>
          </li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Vahab. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
