export default function Testimonials() {
  return (
    <section id="testimonials" className="section testimonials">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">What Parents Say</div>
          <h2 className="section-title">Trusted by Families</h2>
          <p className="section-description">Hear from parents and students about their experience with Loving Hands Academy.</p>
        </div>

        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="testimonial-stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <p className="testimonial-quote">Loving Hands Academy has been a blessing to our family. My daughter has grown not just academically but also in character and confidence. The teachers truly care about each child's development.</p>
            <div className="testimonial-author">
              <div style={{width: '50px', height: '50px', borderRadius: '50%', background: 'linear-gradient(135deg, #fb923c, #f59e0b)', border: '3px solid var(--warm-orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: '700', fontSize: '1.1rem'}}>SN</div>
              <div className="testimonial-info">
                <h4>Sarah Nakato</h4>
                <p>Parent - Primary 5</p>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="testimonial-stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <p className="testimonial-quote">The holistic approach to education at LHA is remarkable. My son has excelled in academics while developing strong moral values. The Christian foundation makes all the difference.</p>
            <div className="testimonial-author">
              <div style={{width: '50px', height: '50px', borderRadius: '50%', background: 'linear-gradient(135deg, #2563eb, #1d4ed8)', border: '3px solid var(--warm-orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: '700', fontSize: '1.1rem'}}>DM</div>
              <div className="testimonial-info">
                <h4>David Mukasa</h4>
                <p>Parent - Primary 7</p>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="testimonial-stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <p className="testimonial-quote">From nursery to primary, LHA has provided a nurturing environment where my children thrive. The small class sizes ensure individual attention, and the results speak for themselves.</p>
            <div className="testimonial-author">
              <div style={{width: '50px', height: '50px', borderRadius: '50%', background: 'linear-gradient(135deg, #10b981, #059669)', border: '3px solid var(--warm-orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: '700', fontSize: '1.1rem'}}>GN</div>
              <div className="testimonial-info">
                <h4>Grace Nabukenya</h4>
                <p>Parent - Multiple Children</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}