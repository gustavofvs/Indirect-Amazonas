import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '@/pages/page'
import Gallery from '@/pages/gallery'
import Motivacao from '@/pages/motivacao'
import { ThemeProvider } from "@/components/theme-provider"
import TargetCursor from '@/components/ui/TargetCursor'

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <TargetCursor spinDuration={2} />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/motivacao" element={<Motivacao />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
