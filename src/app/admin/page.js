'use client'
import { useEffect, useState } from 'react'

export default function AdminDashboard() {
  const [applications, setApplications] = useState([])
  const [subscribers, setSubscribers] = useState([])
  const [stats, setStats] = useState({ 
    totalApplications: 0, 
    pendingApplications: 0, 
    todayApplications: 0,
    totalSubscribers: 0 
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      // Fetch applications with error handling
      const appResponse = await fetch('/api/applications')
      let appData = []
      
      if (appResponse.ok) {
        const data = await appResponse.json()
        appData = Array.isArray(data) ? data : []
      } else {
        console.error('Failed to fetch applications:', appResponse.status)
      }
      
      setApplications(appData)
      
      // Fetch newsletter subscribers with error handling
      const subResponse = await fetch('/api/newsletter')
      let subData = []
      
      if (subResponse.ok) {
        const data = await subResponse.json()
        subData = Array.isArray(data) ? data : []
      } else {
        console.error('Failed to fetch newsletter:', subResponse.status)
      }
      
      setSubscribers(subData)
      
      // Calculate stats (now safe because appData and subData are always arrays)
      const total = appData.length
      const pending = appData.filter(app => app.status === 'pending').length
      const today = appData.filter(app => 
        new Date(app.submitted_at).toDateString() === new Date().toDateString()
      ).length
      const totalSubs = subData.length
      
      setStats({ 
        totalApplications: total, 
        pendingApplications: pending, 
        todayApplications: today,
        totalSubscribers: totalSubs 
      })
      
    } catch (error) {
      console.error('Error fetching data:', error)
      // Set empty arrays on complete failure
      setApplications([])
      setSubscribers([])
      setStats({ 
        totalApplications: 0, 
        pendingApplications: 0, 
        todayApplications: 0,
        totalSubscribers: 0 
      })
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '100vh',
        fontSize: '1.5rem',
        fontWeight: 'bold'
      }}>
        Loading Admin Dashboard...
      </div>
    )
  }

  return (
    <div style={{ 
      padding: '40px', 
      backgroundColor: '#f8fafc', 
      minHeight: '100vh',
      fontFamily: 'Figtree, sans-serif'
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: '40px' }}>
          <h1 style={{ 
            fontSize: '2.5rem', 
            fontWeight: 'bold', 
            marginBottom: '10px',
            color: '#374151'
          }}>
            🎓 Loving Hands Academy - Admin Dashboard
          </h1>
          <p style={{ color: '#6b7280', fontSize: '1.1rem' }}>
            Manage applications, subscribers, and school operations
          </p>
        </div>
        
        {/* Stats Cards */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '24px', 
          marginBottom: '40px' 
        }}>
          <div style={{ 
            background: 'white', 
            padding: '24px', 
            borderRadius: '12px', 
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            border: '1px solid #e5e7eb'
          }}>
            <h3 style={{ 
              color: '#fb923c', 
              fontSize: '2.5rem', 
              fontWeight: 'bold',
              margin: '0 0 8px 0'
            }}>
              {stats.totalApplications}
            </h3>
            <p style={{ margin: '0', color: '#6b7280', fontWeight: '600' }}>Total Applications</p>
          </div>
          
          <div style={{ 
            background: 'white', 
            padding: '24px', 
            borderRadius: '12px', 
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            border: '1px solid #e5e7eb'
          }}>
            <h3 style={{ 
              color: '#f59e0b', 
              fontSize: '2.5rem', 
              fontWeight: 'bold',
              margin: '0 0 8px 0'
            }}>
              {stats.pendingApplications}
            </h3>
            <p style={{ margin: '0', color: '#6b7280', fontWeight: '600' }}>Pending Review</p>
          </div>
          
          <div style={{ 
            background: 'white', 
            padding: '24px', 
            borderRadius: '12px', 
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            border: '1px solid #e5e7eb'
          }}>
            <h3 style={{ 
              color: '#10b981', 
              fontSize: '2.5rem', 
              fontWeight: 'bold',
              margin: '0 0 8px 0'
            }}>
              {stats.todayApplications}
            </h3>
            <p style={{ margin: '0', color: '#6b7280', fontWeight: '600' }}>Today's Applications</p>
          </div>
          
          <div style={{ 
            background: 'white', 
            padding: '24px', 
            borderRadius: '12px', 
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            border: '1px solid #e5e7eb'
          }}>
            <h3 style={{ 
              color: '#2563eb', 
              fontSize: '2.5rem', 
              fontWeight: 'bold',
              margin: '0 0 8px 0'
            }}>
              {stats.totalSubscribers}
            </h3>
            <p style={{ margin: '0', color: '#6b7280', fontWeight: '600' }}>Newsletter Subscribers</p>
          </div>
        </div>

        {/* Applications Table */}
        <div style={{ 
          background: 'white', 
          borderRadius: '12px', 
          overflow: 'hidden', 
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          border: '1px solid #e5e7eb',
          marginBottom: '40px'
        }}>
          <div style={{ 
            padding: '24px', 
            borderBottom: '1px solid #e5e7eb',
            backgroundColor: '#f9fafb'
          }}>
            <h2 style={{ 
              fontSize: '1.5rem', 
              fontWeight: 'bold', 
              margin: '0',
              color: '#374151'
            }}>
              📋 Recent Applications ({applications.length})
            </h2>
          </div>
          
          <div style={{ overflowX: 'auto' }}>
            <table style={{ 
              width: '100%', 
              borderCollapse: 'collapse',
              fontSize: '0.9rem'
            }}>
              <thead style={{ backgroundColor: '#f9fafb' }}>
                <tr>
                  <th style={{ 
                    padding: '16px 12px', 
                    textAlign: 'left', 
                    fontWeight: '600',
                    color: '#374151',
                    borderBottom: '1px solid #e5e7eb'
                  }}>
                    Student Name
                  </th>
                  <th style={{ 
                    padding: '16px 12px', 
                    textAlign: 'left', 
                    fontWeight: '600',
                    color: '#374151',
                    borderBottom: '1px solid #e5e7eb'
                  }}>
                    Class
                  </th>
                  <th style={{ 
                    padding: '16px 12px', 
                    textAlign: 'left', 
                    fontWeight: '600',
                    color: '#374151',
                    borderBottom: '1px solid #e5e7eb'
                  }}>
                    Parent Email
                  </th>
                  <th style={{ 
                    padding: '16px 12px', 
                    textAlign: 'left', 
                    fontWeight: '600',
                    color: '#374151',
                    borderBottom: '1px solid #e5e7eb'
                  }}>
                    Phone
                  </th>
                  <th style={{ 
                    padding: '16px 12px', 
                    textAlign: 'left', 
                    fontWeight: '600',
                    color: '#374151',
                    borderBottom: '1px solid #e5e7eb'
                  }}>
                    Date
                  </th>
                  <th style={{ 
                    padding: '16px 12px', 
                    textAlign: 'left', 
                    fontWeight: '600',
                    color: '#374151',
                    borderBottom: '1px solid #e5e7eb'
                  }}>
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {applications.map((app, index) => (
                  <tr key={app.id || index} style={{ 
                    borderBottom: '1px solid #f3f4f6',
                    ':hover': { backgroundColor: '#f9fafb' }
                  }}>
                    <td style={{ padding: '16px 12px', color: '#374151' }}>
                      <strong>{app.student_first_name} {app.student_last_name}</strong>
                    </td>
                    <td style={{ padding: '16px 12px', color: '#6b7280' }}>
                      {app.class_level}
                    </td>
                    <td style={{ padding: '16px 12px', color: '#6b7280' }}>
                      {app.parent_email}
                    </td>
                    <td style={{ padding: '16px 12px', color: '#6b7280' }}>
                      {app.primary_phone}
                    </td>
                    <td style={{ padding: '16px 12px', color: '#6b7280' }}>
                      {new Date(app.submitted_at).toLocaleDateString()}
                    </td>
                    <td style={{ padding: '16px 12px' }}>
                      <span style={{ 
                        backgroundColor: app.status === 'pending' ? '#fef3c7' : '#dcfce7',
                        color: app.status === 'pending' ? '#92400e' : '#166534',
                        padding: '4px 12px',
                        borderRadius: '20px',
                        fontSize: '0.8rem',
                        fontWeight: '600',
                        textTransform: 'capitalize'
                      }}>
                        {app.status || 'pending'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            
            {applications.length === 0 && (
              <div style={{ 
                padding: '40px', 
                textAlign: 'center', 
                color: '#6b7280' 
              }}>
                No applications yet. Applications will appear here when submitted.
              </div>
            )}
          </div>
        </div>

        {/* Newsletter Subscribers */}
        <div style={{ 
          background: 'white', 
          borderRadius: '12px', 
          overflow: 'hidden', 
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          border: '1px solid #e5e7eb'
        }}>
          <div style={{ 
            padding: '24px', 
            borderBottom: '1px solid #e5e7eb',
            backgroundColor: '#f9fafb'
          }}>
            <h2 style={{ 
              fontSize: '1.5rem', 
              fontWeight: 'bold', 
              margin: '0',
              color: '#374151'
            }}>
              📧 Newsletter Subscribers ({subscribers.length})
            </h2>
          </div>
          
          <div style={{ 
            maxHeight: '400px', 
            overflowY: 'auto',
            padding: '20px'
          }}>
            {subscribers.length > 0 ? (
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
                gap: '12px'
              }}>
                {subscribers.map((sub, index) => (
                  <div key={sub.id || index} style={{ 
                    padding: '12px 16px', 
                    backgroundColor: '#f9fafb',
                    borderRadius: '8px',
                    border: '1px solid #e5e7eb',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <span style={{ color: '#374151', fontWeight: '500' }}>
                      {sub.email}
                    </span>
                    <span style={{ 
                      color: '#6b7280', 
                      fontSize: '0.8rem'
                    }}>
                      {new Date(sub.subscribed_at).toLocaleDateString()}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <div style={{ 
                padding: '40px', 
                textAlign: 'center', 
                color: '#6b7280' 
              }}>
                No newsletter subscribers yet. Subscribers will appear here when they sign up.
              </div>
            )}
          </div>
        </div>

        {/* Quick Actions */}
        <div style={{ 
          marginTop: '40px',
          padding: '24px',
          background: 'white',
          borderRadius: '12px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          border: '1px solid #e5e7eb',
          textAlign: 'center'
        }}>
          <h3 style={{ 
            marginBottom: '16px',
            color: '#374151',
            fontSize: '1.2rem',
            fontWeight: '600'
          }}>
            🚀 Quick Actions
          </h3>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button 
              onClick={fetchData}
              style={{
                backgroundColor: '#fb923c',
                color: 'white',
                border: 'none',
                padding: '12px 24px',
                borderRadius: '8px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#f59e0b'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#fb923c'}
            >
              🔄 Refresh Data
            </button>
            <a 
              href="/"
              style={{
                backgroundColor: '#2563eb',
                color: 'white',
                border: 'none',
                padding: '12px 24px',
                borderRadius: '8px',
                fontWeight: '600',
                textDecoration: 'none',
                display: 'inline-block'
              }}
            >
              🏠 Back to Website
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}