'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input, type InputProps } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Lock, Eye, EyeOff } from 'lucide-react'

interface PasscodeAuthProps {
  onAuthenticated: () => void
}

export function PasscodeAuth({ onAuthenticated }: PasscodeAuthProps) {
  const [passcode, setPasscode] = useState('')
  const [showPasscode, setShowPasscode] = useState(false)
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  // SHA-256 hash of "Passcode"
  const correctHash = 'ea26c21a777df937614d2e46313489ed4a3970720e56ab8bccf5ef586a659374'

  const hashString = async (str: string): Promise<string> => {
    const encoder = new TextEncoder()
    const data = encoder.encode(str)
    const hashBuffer = await crypto.subtle.digest('SHA-256', data)
    const hashArray = Array.from(new Uint8Array(hashBuffer))
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('')
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      const hashedInput = await hashString(passcode)
      
      if (hashedInput === correctHash) {
        // Store authentication in localStorage
        localStorage.setItem('ak-portfolio-authenticated', 'true')
        onAuthenticated()
      } else {
        setError('Incorrect passcode. Please try again.')
      }
    } catch {
      setError('An error occurred. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-bg-primary flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <Lock className="h-6 w-6 text-primary" />
          </div>
          <CardTitle className="text-2xl font-bold">Portfolio Access</CardTitle>
          <CardDescription>
            Enter the passcode to access the portfolio
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <div className="relative">
                <Input
                  type={showPasscode ? 'text' : 'password'}
                  placeholder="Enter passcode"
                  value={passcode}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPasscode(e.target.value)}
                  className="pr-10"
                  disabled={isLoading}
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowPasscode(!showPasscode)}
                  disabled={isLoading}
                >
                  {showPasscode ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </Button>
              </div>
              {error && (
                <p className="text-sm text-red-500">{error}</p>
              )}
            </div>
            <Button
              type="submit"
              className="w-full"
              disabled={isLoading || !passcode.trim()}
            >
              {isLoading ? 'Verifying...' : 'Access Portfolio'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
} 