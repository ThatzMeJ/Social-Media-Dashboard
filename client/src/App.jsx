import { Routes, Route, BrowserRouter } from 'react-router';
import LandingPage from './Pages/LandingPage/LandingPage';
import Layout from './Pages/LandingPage/Layout';

// https://dribbble.com/shots/25131056-Socive-Social-Media-Analytics-Landingpage

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Layout />}>
          <Route index element={<LandingPage />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App