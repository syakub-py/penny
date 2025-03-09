import type React from "react"

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-background">
      <main className="flex-1 overflow-x-hidden overflow-y-auto bg-background">
        {children}
      </main>
    </div>
  )
}