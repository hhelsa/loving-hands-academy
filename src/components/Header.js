'use client' 
import { useState } from 'react'

export default function Header() {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <header className="header" id="header">
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <div className="logo-image">
                <img
                  src="https://raw.githubusercontent.com/hhelsa/lha-logo/main/school_logo.png"
                  alt="Loving Hands Academy Logo"
                  className="logo-img"
                />
              </div>
              <div className="logo-text">
                <h1>Loving Hands Academy</h1>
                <p>Wisdom for Generations</p>
              </div>
            </div>
            <nav className="nav">
              <ul className="nav-links">
                <li><a href="#home" className="nav-link">Home</a></li>
                <li><a href="#about" className="nav-link">About</a></li>
                <li><a href="#programs" className="nav-link">Programs</a></li>
                <li><a href="#why-choose-us" className="nav-link">Why Choose Us</a></li>
                <li><a href="#testimonials" className="nav-link">Reviews</a></li>
                <li><a href="#contact" className="nav-link">Contact</a></li>
              </ul>
              <button
                className="cta-nav"
                onClick={() => {
                  console.log('Apply Now clicked')
                  setShowModal(true)
                }}
              >
                Apply Now
              </button>
            </nav>
          </div>
        </div>
      </header>

      {showModal && (
        <div
          className="modal active"
          style={{
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999,
          }}
          onClick={(e) => e.target.classList.contains('modal') && setShowModal(false)}
        >
          <div
            className="modal-content"
            style={{
              backgroundColor: 'white',
              padding: '2rem',
              borderRadius: '8px',
              maxWidth: '500px',
              width: '100%',
              boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
            }}
          >
            <button
              className="modal-close"
              onClick={() => setShowModal(false)}
              style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                border: 'none',
                background: 'transparent',
                cursor: 'pointer',
                float: 'right',
              }}
              aria-label="Close modal"
            >
              &times;
            </button>
            <div className="form-header">
              <h3>Student Admission Application</h3>
              <p>Join our family of learners.</p>
            </div>
            
            <form onSubmit={async (e) => {
              e.preventDefault()
              const formData = new FormData(e.target)
              const data = Object.fromEntries(formData)
              
              try {
                const response = await fetch('/api/applications', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify(data)
                })
                
                if (response.ok) {
                  alert('Application Submitted Successfully!')
                  setShowModal(false)
                  e.target.reset()
                } else {
                  alert('Error submitting application')
                }
              } catch (error) {
                alert('Error submitting application')
              }
            }}>
              <div className="form-group">
                <label>Student Name <span className="required">*</span></label>
                <input type="text" name="student_first_name" required />
              </div>
              <div className="form-group">
                <label>Parent Email <span className="required">*</span></label>
                <input type="email" name="parent_email" required />
              </div>
              <div className="form-group">
                <label>Phone <span className="required">*</span></label>
                <input type="tel" name="primary_phone" required />
              </div>
              <button type="submit" className="submit-btn">Submit Application</button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
