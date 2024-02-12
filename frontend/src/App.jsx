import TextEditor from './components/TextEditor'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Testpage from './pages/Testpage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
  },
  {
    path: '/document/:id',
    element: <TextEditor />,
  },
])

function App() {

  return (
      <RouterProvider router={router} />
  )
}

export default App
