import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from "@/components/theme-provider"
import TargetCursor from '@/components/ui/TargetCursor'
import { lazy, Suspense } from 'react'

const Home = lazy(() => import('@/pages/page'))
const Gallery = lazy(() => import('@/pages/gallery'))
const Motivacao = lazy(() => import('@/pages/motivacao'))

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <TargetCursor spinDuration={2} />
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/motivacao" element={<Motivacao />} />
          </Routes>
        </Suspense>
      </Router>
    </ThemeProvider>
  )
}

export default App
