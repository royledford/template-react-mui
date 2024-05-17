import Home from './pages/Home/Home'

export default function App() {
  return <Home />
}

function wait(duration) {
  return new Promise((resolve) => setTimeout(resolve, duration))
}
