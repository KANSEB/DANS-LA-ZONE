import React from 'react'

function App() {
  const containerStyle = {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'sans-serif',
    backgroundColor: '#0f172a',
    color: 'white'
  }

  return (
    <div style={containerStyle}>
      <h1 style={{ fontSize: '3rem', margin: '0' }}>DANS LA ZONE</h1>
      <p style={{ color: '#94a3b8' }}>Test de déploiement en cours...</p>
      <div style={{ marginTop: '20px', padding: '10px 20px', border: '1px solid #38bdf8', borderRadius: '8px' }}>
        Statut : 🟢 Prêt pour le Build
      </div>
    </div>
  )
}

export default App
// Force build 1