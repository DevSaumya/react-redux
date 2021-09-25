import { useSelector, useDispatch } from 'react-redux';
import { logIn, logOut } from './store/actions';

function App() {
  const {isAuth} = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <button onClick={() => dispatch(logIn())}>logIn</button>
      <button onClick={() => dispatch(logOut())}>logOut</button>
      {isAuth ? <h1> isAuth From Redux </h1> : <h1> is Not Auth From Redux  </h1>}
    </div>
  );
}

export default App;
