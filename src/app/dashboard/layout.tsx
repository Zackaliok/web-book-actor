'use client'

import SideNav from '@/app/ui/dashboard/sidenav'
import { useSession, signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export default function Layout({ children }: { children: React.ReactNode }) {
  const { data: session } = useSession()
  const router = useRouter()

  const handleRedirect = () => {
    router.push('/')
  }

  return (
    <>
      {session ? (
        <div>
          <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            <div className="w-full flex-none md:w-64">
              <SideNav />
            </div>
            <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
              {children}
            </div>
          </div>
        </div>
      ) : (
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">Vous êtes perdu ?</h1>
              <p className="py-6">
                Vous devez vous connecter pour accéder au dashboard
                administrateur et modifier vos données.
              </p>
              <div className="flex justify-center flex-row gap-4">
                <button
                  onClick={() => signIn('google')}
                  className="btn btn-primary"
                >
                  Se connecter
                </button>
                <button
                  className="btn btn-secondary"
                  onClick={() => {
                    handleRedirect()
                  }}
                >
                  Revenir en lieu sûr
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
