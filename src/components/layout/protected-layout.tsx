'use client'

import { useAuth } from '@/components/providers/auth-provider'
import { PasscodeAuth } from '@/components/auth/passcode-auth'
import { Navigation } from '@/components/layout/navigation'
import { Footer } from '@/components/layout/footer'

interface ProtectedLayoutProps {
  children: React.ReactNode
}

export function ProtectedLayout({ children }: ProtectedLayoutProps) {
  const { isAuthenticated, setIsAuthenticated } = useAuth()

  if (!isAuthenticated) {
    return <PasscodeAuth onAuthenticated={() => setIsAuthenticated(true)} />
  }

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      <Navigation />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  )
} 