```typescript
export default function Home() {
  return (
    <main style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center', 
      justifyContent: 'center',
      fontFamily: 'system-ui, sans-serif'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
        Booking SaaS
      </h1>
      <p style={{ fontSize: '1.25rem', color: '#666' }}>
        Plateforme de réservation en ligne pour professionnels
      </p>
      <a 
        href="/dashboard" 
        style={{ 
          marginTop: '2rem',
          padding: '0.75rem 1.5rem',
          backgroundColor: '#2563eb',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '0.5rem'
        }}
      >
        Accéder au dashboard
      </a>
    </main>
  );
}
```