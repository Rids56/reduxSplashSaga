// import './App.css'
import { Provider } from 'react-redux'
import Header from './Component/Header/index'
import ImageGrid from './Component/ImageGrid/index'
import CartDetails from './Component/Cart/cartDetails.jsx'
import { Fragment } from 'react';
import configureStore from './store';
import { Route, Routes, } from 'react-router-dom';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <Header />
        <Routes>
          <Route path='/' element={<ImageGrid />}></Route>
          <Route path='/cart' element={<CartDetails />}></Route>
        </Routes>
      </Fragment>
    </Provider>
  )
}

export default App
