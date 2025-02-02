import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
// import './index.css'
import App from './components/App.jsx'
import store from './slices/index.js';

const mountNode = document.getElementById('root');
const root = ReactDOM.createRoot(mountNode);
// Оборачиваем приложение в Provider и передаем хранилище в него
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);