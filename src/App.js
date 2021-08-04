import './App.css';
import Header from './components/Header/Header';

function App(props) {
  return (
    <div className="app-wrapper">
      <Header store={props.state} dispatch={props.dispatch} />
    </div>
  );
}

export default App;
