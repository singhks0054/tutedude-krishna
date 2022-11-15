import Navbar from './components/Navbar';
import Breadcrumb from './components/Breadcrumb';
import ReferEarn from './pages/ReferEarn';
import FriendReffered from './pages/FriendReffered';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Breadcrumb />
      <Routes>
        <Route path='/' element={<ReferEarn />} />
        <Route path='/referfriend' element={<FriendReffered />} />
      </Routes>
    </>
  );
}

export default App;
