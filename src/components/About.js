export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="about-grid">
          <div className="about-content">
            <h3>Building Tomorrow's Leaders Today</h3>
            <p className="about-text">
              Loving Hands Academy is an academic institution founded on <strong>Christian values, morals and character</strong>. We are focused on training up a child in a holistic way so that when they grow up they will never leave that path.
            </p>
            
            <div className="mission-vision-grid">
              <div className="mvs-card vision">
                <h4>Our Motto</h4>
                <p><b>"Wisdom for Generations"</b></p>
              </div>
              
              <div className="mvs-card mission">
                <h4>Our Mission</h4>
                <p><b>"To prepare a well-nurtured, holistic child who is able to release their talents with transformational character, to deal with the realities of life by developing their Academic, social, physical, Leadership and spiritual potential from a foundation of Biblical truth."</b></p>
              </div>
              
              <div className="mvs-card slogan">
                <h4>Our Vision</h4>
                <p><b>"To become an academic center of excellence for learning, development and growth of happy healthy children."</b></p>
              </div>
            </div>
            
            <div style={{textAlign: 'center'}}>
              <div className="core-values-badge">Our Core Values</div>
            </div>
            
            <div className="values-grid">
              <div className="value-item">
                <div className="value-icon">
                  <i className="fas fa-smile"></i>
                </div>
                <div className="value-title">Happiness & Wellbeing</div>
                <div className="value-description">Nurturing joyful, healthy children in every aspect</div>
              </div>
              <div className="value-item">
                <div className="value-icon">
                  <i className="fas fa-star"></i>
                </div>
                <div className="value-title">Truth & Excellence</div>
                <div className="value-description">Commitment to truth and the highest standards</div>
              </div>
              <div className="value-item">
                <div className="value-icon">
                  <i className="fas fa-handshake"></i>
                </div>
                <div className="value-title">Accountability</div>
                <div className="value-description">Taking responsibility for our actions and growth</div>
              </div>
              <div className="value-item">
                <div className="value-icon">
                  <i className="fas fa-heart"></i>
                </div>
                <div className="value-title">Respect</div>
                <div className="value-description">Honoring others and treating everyone with dignity</div>
              </div>
              <div className="value-item">
                <div className="value-icon">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <div className="value-title">Integrity</div>
                <div className="value-description">Living with honesty and strong moral principles</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}