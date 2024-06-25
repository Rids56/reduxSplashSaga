// import './App.css'
import { Provider } from 'react-redux'
import Header from './Component/Header/index'
import ImageGrid from './Component/ImageGrid/index'
import { Fragment } from 'react';
import configureStore from './store'

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <Header />
        <ImageGrid />
      </Fragment>
    </Provider>
  )
}

export default App
