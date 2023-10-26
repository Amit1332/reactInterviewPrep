import './App.css';
import Conditional from './Day2/ContitionalRender/Conditional';
import Parent from './Day2/Counter/Parent';
import DayOne from './Day2/DayOne';
import RouteComponent from './Day2/RoutingImpl/RouteComponent';


function App() {
  return (
   <div className='App'>
  <DayOne/>
  <Parent/>
  <RouteComponent/>
  <Conditional/>
   </div>
  );
}

export default App;
