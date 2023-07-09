import './App.css';
import MyHeader from './MyHeader';
import Counter from './Counter';
import Container  from './Container';

function App() {


  const counterProps = {
    a:1,
    b:2,
    initialValue : 5,
  }

  return (
    <div className="App">
      <Container>
        <MyHeader />
        <Counter {...counterProps}/>
      </Container>
    </div>
  );
}
export default App;
