import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import App from './App.jsx'
import './index.css'
import { persistestore, store } from './redux/store.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistestore} loading={<div>Loading ...</div>}>
        <App />
      </PersistGate>
    </Provider>
  // </StrictMode>,
)
