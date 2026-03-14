```typescript
export const metadata = {
  title: 'Booking SaaS - Gérez vos réservations',
  description: 'Plateforme de réservation en ligne pour professionnels',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}
```