import { Route, Routes } from 'react-router-dom'

import HomePage from './pages/HomePage/HomePage'
import CreateEventPage from './pages/CreateEventPage/CreateEventPage'
import InfoEventPage from './pages/InfoEventPage/InfoEventPage'
import EditEventPage from './pages/EditEventPage/EditEventPage'
import Header from "./components/Header/Header";

import './App.module.css'

function App() {

  return (
    <div >
      <Header />

      <Routes >
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreateEventPage />} />
        <Route path="/info/:id" element={<InfoEventPage />} />
        <Route path="/edit" element={<EditEventPage />} />
        <Route path="/*" element={<HomePage />} />
      </Routes>
    </div>
  )
}

export default App
