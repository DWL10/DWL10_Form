import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import App from './App.jsx'
import Form from './pages/form.jsx'
import Offline from './pages/offline.jsx'
import Succesful from './pages/succesful.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/DWL10_Form">

      <Routes>

        <Route path="/" element={<App />}>

          <Route
            index
            element={<Offline/>}
          />

          <Route
            path="Online"
            element={<Form/>}
          />

          <Route
            path="Success"
            element={<Succesful/>}
            >
          </Route>

        </Route>

      </Routes>

    </BrowserRouter>
  </StrictMode>,
)
