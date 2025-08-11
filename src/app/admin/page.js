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