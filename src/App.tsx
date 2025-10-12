import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from "@/components/theme-provider"
import TargetCursor from '@/components/ui/TargetCursor'
import { lazy, Suspense, Component, type ErrorInfo, type ReactNode } from 'react'
import { PuffLoader } from 'react-spinners';

const Home = lazy(() => import('@/pages/page'))
const Gallery = lazy(() => import('@/pages/gallery'))
const Motivacao = lazy(() => import('@/pages/motivacao'))

class ErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <TargetCursor spinDuration={2} />
      <ErrorBoundary>
        <Router>
          <Suspense fallback={
            <div className="flex justify-center items-center min-h-screen">
              <PuffLoader
                size={50}
                color="var(--ring)"
                loading={true}
                speedMultiplier={1}
              />
            </div>
          }>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/motivacao" element={<Motivacao />} />
            </Routes>
          </Suspense>
        </Router>
      </ErrorBoundary>
    </ThemeProvider>
  )
}

export default App
