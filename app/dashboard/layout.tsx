'use client'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'


export default function DashboardLayout({ children }: { children: React.ReactNode }) {
return (
<div className="bg-black min-h-screen flex flex-col">
<Navigation />
<div className="flex-1 px-6 py-8">{children}</div>
<Footer />
</div>
)
}
