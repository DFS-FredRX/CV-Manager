import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { routes } from './App.jsx'
import { ModalProvider } from './contexts/ModalContext.jsx'
import { NotificationProvider } from './contexts/NotificationContext.jsx'

const router = createBrowserRouter(routes)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NotificationProvider>
      <ModalProvider>
        <RouterProvider router={router} />
      </ModalProvider>
    </NotificationProvider>
  </StrictMode>
)
