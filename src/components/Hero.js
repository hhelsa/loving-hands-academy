'use client'
import { useState } from 'react'

export default function Hero() {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 style={{marginTop: '24px'}}>
              A place to Learn, Develop and Grow Happy Healthy Children
            </h1>
            <p className="hero-subtitle">
              Empowering the next generation through holistic education rooted in Christian values, academic excellence, and character development in beautiful Entebbe, Uganda.
            </p>
            <div className="hero-buttons">
              <button
                className="btn-primary"
                onClick={() => {
                  console.log('Enroll Your Child clicked')
                  setShowModal(true)
                }}
              >
                <i className="fas fa-graduation-cap"></i> Enroll Your Child
              </button>
            </div>
          </div>
        </div>
      </section>

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
              maxWidth: '600px',
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
              <p>Join our family of learners. Please complete all required fields.</p>
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
              <div className="form-row">
                <div className="form-group">
                  <label>First Name <span className="required">*</span></label>
                  <input type="text" name="student_first_name" required />
                </div>
                <div className="form-group">
                  <label>Last Name <span className="required">*</span></label>
                  <input type="text" name="student_last_name" required />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Date of Birth <span className="required">*</span></label>
                  <input type="date" name="date_of_birth" required />
                </div>
                <div className="form-group">
                  <label>Gender <span className="required">*</span></label>
                  <select name="gender" required>
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>Class Applying For <span className="required">*</span></label>
                <select name="class_level" required>
                  <option value="">Select Class</option>
                  <optgroup label="Nursery Section">
                    <option value="baby-class">Baby Class</option>
                    <option value="middle-class">Middle Class</option>
                    <option value="top-class">Top Class</option>
                  </optgroup>
                  <optgroup label="Primary Section">
                    <option value="p1">Primary 1</option>
                    <option value="p2">Primary 2</option>
                    <option value="p3">Primary 3</option>
                    <option value="p4">Primary 4</option>
                    <option value="p5">Primary 5</option>
                    <option value="p6">Primary 6</option>
                    <option value="p7">Primary 7</option>
                  </optgroup>
                </select>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Father's Name <span className="required">*</span></label>
                  <input type="text" name="father_name" required />
                </div>
                <div className="form-group">
                  <label>Mother's Name <span className="required">*</span></label>
                  <input type="text" name="mother_name" required />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Phone Number <span className="required">*</span></label>
                  <input type="tel" name="primary_phone" placeholder="+256 XXX XXX XXX" required />
                </div>
                <div className="form-group">
                  <label>Email Address <span className="required">*</span></label>
                  <input type="email" name="parent_email" required />
                </div>
              </div>

              <div className="form-group">
                <label>Home Address <span className="required">*</span></label>
                <textarea name="home_address" rows="3" placeholder="Complete address including district" required></textarea>
              </div>

              <div className="form-group">
                <label>Additional Comments</label>
                <textarea name="additional_comments" rows="3" placeholder="Any additional information..."></textarea>
              </div>

              <button type="submit" className="submit-btn">Submit Application</button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
