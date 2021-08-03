import './App.css';
import Header from './components/Header/Header';

function App(props) {
  return (
    <div className="app-wrapper">
      <Header store={props.state} addTxt={props.addTxt}/>
    </div>
  );
}

export default App;
