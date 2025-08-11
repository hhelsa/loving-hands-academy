export default function Programs() {
  return (
    <section id="programs" className="section programs">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Academic Programs</div>
          <h2 className="section-title">Comprehensive Learning Journey</h2>
          <p className="section-description">From early childhood through primary education, we offer structured programs that develop academic excellence, character, and life skills.</p>
        </div>
        
        <div className="programs-grid">
          <div className="program-card">
            <div className="program-image">
              <img src="https://images.unsplash.com/photo-1595788700151-82a719bf93eb?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="African children in nursery classroom" style={{width: '100%', height: '200px', objectFit: 'cover'}} />
              <div className="program-badge">Ages 3-6</div>
            </div>
            <div className="program-content">
              <h3 className="program-title">Nursery Section</h3>
              <div className="program-age">Baby Class • Middle Class • Top Class</div>
              <p className="program-description">A gentle introduction to learning through play, creativity, and exploration in a nurturing Christian environment.</p>
              <ul className="program-features">
                <li>Play-based learning approach</li>
                <li>English and local language instruction</li>
                <li>Art, music, and storytelling</li>
                <li>Small class sizes (max 15 children)</li>
                <li>Nutritious meals provided</li>
              </ul>
            </div>
          </div>

          <div className="program-card">
            <div className="program-image">
              <img src="https://images.unsplash.com/photo-1558979107-df7b00309b13?q=80&w=788&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="African primary school students learning" style={{width: '100%', height: '200px', objectFit: 'cover'}} />
              <div className="program-badge">Ages 6-13</div>
            </div>
            <div className="program-content">
              <h3 className="program-title">Primary Section</h3>
              <div className="program-age">Primary 1 to Primary 7</div>
              <p className="program-description">Comprehensive curriculum following Uganda's national standards with emphasis on academic excellence and character development.</p>
              <ul className="program-features">
                <li>National Curriculum Development Centre syllabus</li>
                <li>Mathematics, English, Science, Social Studies</li>
                <li>Computer literacy and ICT skills</li>
                <li>Library and reading programs</li>
                <li>Academic excellence preparation</li>
              </ul>
            </div>
          </div>

          <div className="program-card">
            <div className="program-image">
              <img src="https://images.unsplash.com/photo-1725245250763-f6fbdeddbb64?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="African children swimming and sports activities" style={{width: '100%', height: '200px', objectFit: 'cover'}} />
              <div className="program-badge">All Ages</div>
            </div>
            <div className="program-content">
              <h3 className="program-title">Special Programs</h3>
              <div className="program-age">Extra-curricular Excellence</div>
              <p className="program-description">Specialized programs that develop talents, leadership skills, and well-rounded individuals with diverse interests.</p>
              <ul className="program-features">
                <li>Music, Dance, and Drama Club</li>
                <li>Debate Society and Public Speaking</li>
                <li>Sports Teams and Athletics</li>
                <li>Science and Math Competitions</li>
                <li>Student Leadership Council</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}