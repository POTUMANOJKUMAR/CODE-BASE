import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { persistestore, store } from './redux/store.jsx'
import { PersistGate } from 'redux-persist/lib/integration/react'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistestore} loading={<div>Loading ...</div>}>

        <App />
      </PersistGate>

    </Provider>


  </StrictMode>,
)
