export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div style={{display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px'}}>
              <img src="https://raw.githubusercontent.com/hhelsa/lha-logo/main/school_logo.png" alt="Loving Hands Academy Logo" style={{width: '50px', height: '50px', objectFit: 'contain'}} />
              <h3 style={{margin: '0'}}>Loving Hands Academy</h3>
            </div>
            <p>Nurturing young minds with love, building tomorrow's leaders through excellence in education, character development, and Christian values in the heart of Entebbe, Uganda.</p>
            <div className="social-links">
                <a href="https://wa.me/256777875736" className="social-link" target="_blank">
                    <i className="fab fa-whatsapp"></i>
                </a>
                <a href="#" className="social-link">
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social-link">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="social-link">
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="social-link">
                    <i className="fab fa-tiktok"></i>
                </a>
          </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#programs">Programs</a></li>
              <li><a href="#why-choose-us">Why Choose Us</a></li>
              <li><a href="#testimonials">Reviews</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="motto">"Wisdom for Generations"</div>
          <p>&copy; 2025 Loving Hands Academy. All rights reserved. | Excellence in Education Since 2021</p>
        </div>
      </div>
    </footer>
  )
}