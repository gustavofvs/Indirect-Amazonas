import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '@/pages/page'
import { ThemeProvider } from "@/components/theme-provider"
import TargetCursor from '@/components/ui/TargetCursor'

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <TargetCursor spinDuration={2} />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
