// Footer.js
// Footer.js
import React from 'react';


function Footer() {
  return (
    <div className="footer">
      <div className="footer-section">
        <h4>Company</h4>
        <ul>
          <li>About Us</li>
          <li>Careers</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>View Website in</h4>
        <p>English</p>
      </div>
      <div className="footer-section">
        <h4>Need Help?</h4>
        <ul>
          <li>Visit Help Center</li>
          <li>Share Feedback</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Connect with Us</h4>
        <div className="social-icons">
          <span>🔵</span> {/* Replace with icons as needed */}
          <span>❌</span>
        </div>
        <div className="app-stores">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy3yt2UdGKpuLH_WHF0JOKg8cYJHSVarNH5Q&s" alt="Google Play" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq6nN2gU6pzZ3C29wm4kZbmfde0UMisioIIA&s" alt="App Store" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
