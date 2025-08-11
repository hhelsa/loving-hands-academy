export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Get In Touch</div>
          <h2 className="section-title">Visit Our Campus</h2>
          <p className="section-description">Located in the beautiful town of Entebbe, we welcome you to visit our campus and see our facilities firsthand.</p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="contact-details">
                <h4>Our Location</h4>
                <p>Hosanna Road, Kabale B<br/>
                Entebbe Municipality<br/>
                Wakiso District, Uganda</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-phone"></i>
              </div>
              <div className="contact-details">
                <h4>Phone Numbers</h4>
                <p>+256 777 875 736<br/>
                +256 709 290 729<br/>
                +256 755 377 171<br/>
                +256 775 092 766</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="contact-details">
                <h4>Email Address</h4>
                <p>info@lovinghandsacademy.edu.ug<br/>
                admissions@lovinghandsacademy.edu.ug</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-clock"></i>
              </div>
              <div className="contact-details">
                <h4>School Hours</h4>
                <p>Monday - Friday: 7:00 AM - 5:00 PM<br/>
                Saturday: 8:00 AM - 12:00 PM<br/>
                Sunday: Closed</p>
              </div>
            </div>
          </div>

          <div className="map-container">
            <div className="map-content">
              <h3>Find Us in Entebbe</h3>
              <p>Conveniently located in Kabale B, easily accessible from all parts of Entebbe and surrounding areas.</p>
              <div className="location-badge">
                <i className="fas fa-plane"></i>
                <span>5 minutes from Entebbe Airport</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}