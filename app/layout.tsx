import Navigation from '@/components/navigation'
import Footer from '@/components/footer'


export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="en">
<head>
<title>Serenica – Next-Gen Bioinformatics Platform</title>
<meta name="description" content="Serenica: Future-proof variant analysis & AI-driven genomics" />
</head>
<body className="bg-black text-white">
<Navigation />
<main className="min-h-screen px-6 py-8">{children}</main>
<Footer />
</body>
</html>
)
}
