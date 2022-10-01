
import './App.css';
import { Button, Spinner } from 'react-bootstrap';
import GridCard from './components/GridCard/GridCard';

function App() {
  return (
    <div className="App">
      <Button variant="success">React-Bootstrap Button</Button>
      <Spinner animation="grow" variant="danger" />

      <GridCard></GridCard>
    </div>
  );
}

export default App;
