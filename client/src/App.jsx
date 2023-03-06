//dependencies
import { useEffect, Suspense, lazy } from 'react'
import WebFont from 'webfontloader';


//router
import {Routes, Route, } from 'react-router'
import {BrowserRouter} from 'react-router-dom'

//pages
const HomePage = lazy(_ => import('./pages/home_page'))
const DetailPage = lazy(_ => import('./pages/details_page'))

// components
const Loading = () => {
  return (
    <div style={{ margin: '5rem auto' }}>Please wait, loading ...</div>
  )
}

const Nav = lazy(_ => import('./components/nav'))

//layout
const Layout = lazy(_ => import('./layout/layout'))

function App() {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Droid Sans', 'Chilanka']
      }
    });
  },[])

  return (
    <div className="App h-full font-loader">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <Suspense fallback={<Loading />} >
              <Layout />
            </Suspense>
          }>
            <Route index element={
              <Suspense fallback={<Loading />}>
                <HomePage />
              </Suspense>} />
            <Route path='/detail/:_id' element={
              <Suspense fallback={<Loading />}>
                <DetailPage />
              </Suspense>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
