import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import DayList from './component/DayList';
import Day from './component/Day';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Routes>
          {/* path='/' 는 첫페이지를 의미한다.(홈) */}
          <Route path='/' element={<DayList />} />
          {/* 동적 라우팅 */}
          <Route path='/day/:day' element={<Day />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
