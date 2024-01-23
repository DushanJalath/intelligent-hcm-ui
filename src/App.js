import logo from './logo.svg';
import './App.css';

import Overtimecount from './components/Overtimecount'
import Monthlyreport from './components/Monthlyreport'
import Totalovertime from './components/Totalovertime'

function App() {
  return (
    <>
    <Totalovertime title="Totalovertime"/>
    <Monthlyreport title="Monthlyreport"/>
    <Overtimecount title="overtimecount"/>
    <Totalovertime title="Remainings Overtime"/>
    </>
  );
}

export default App;
