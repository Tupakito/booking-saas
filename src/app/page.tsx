export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-4">Rendez</h1>
        <p className="text-xl mb-8">
          SaaS de réservation pour commerces locaux
        </p>

        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">🚧 Setup en cours</h2>
          <p className="text-gray-600">
            Le projet est en phase d&apos;initialisation.
            <br />
            Prochaine étape : configuration Auth.js et dashboard.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 text-sm">
          <div className="p-4 border rounded">
            <strong>Stack</strong>
            <ul className="mt-2 space-y-1 text-gray-600">
              <li>✅ Next.js 14</li>
              <li>✅ TypeScript</li>
              <li>✅ Tailwind CSS</li>
              <li>✅ Prisma</li>
              <li>⏳ Auth.js</li>
              <li>⏳ Dashboard</li>
            </ul>
          </div>
          <div className="p-4 border rounded">
            <strong>Features S1</strong>
            <ul className="mt-2 space-y-1 text-gray-600">
              <li>⏳ Auth & Onboarding</li>
              <li>⏳ CRUD Services</li>
              <li>⏳ Disponibilités</li>
              <li>⏳ Page publique</li>
              <li>⏳ Emails</li>
              <li>⏳ Stripe Connect</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}