import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>InTellMe</h3>
          <p>M. Brandon Lane</p>
        </div>
        <div className="footer-section">
          <p>326 Delaware Street</p>
          <p>Johnson City, TN 37604</p>
        </div>
        <div className="footer-section">
          <p>
            <a href="mailto:brandon@intellmeai.com">brandon@intellmeai.com</a>
          </p>
          <p>
            <a href="tel:+17473221977">(747) 322-1977</a>
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} InTellMe. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
