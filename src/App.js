
import './App.css';
import Presentation from './components/todos/Presentation';
import Input from './components/input/Presentation'
function App() {
  return (
    <div style={{marginTop:'30px'}}>
      <center>

      <Input/>
      <div style={{marginTop:'30px'}}>

     <Presentation/>
      </div>
      </center>
    </div>
  );
}

export default App;
