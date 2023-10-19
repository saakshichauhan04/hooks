
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Layout from './component/Layout';
import ContactUs from './Pages/Contact';

function App() {
  return (
   <>
   <BrowserRouter>
   <Layout>

   <Routes>
<Route path='/' element={<Home/>} />
<Route path='/contact' element={<ContactUs/>} />
   </Routes>
   </Layout>
   </BrowserRouter>
   </>
  );
}

export default App;
