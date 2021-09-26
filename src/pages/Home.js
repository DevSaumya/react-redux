import { useSelector, useDispatch } from 'react-redux';
import { logIn, logOut, increment, decrement } from '../store/actions';
import React from 'react';

function Home() {
    const { isAuth, count } = useSelector(state => state);
    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={() => dispatch(logIn())}>logIn</button>
            <button onClick={() => dispatch(logOut())}>logOut</button>
            {isAuth ? <h1> isAuth From Redux </h1> : <h1> is Not Auth From Redux  </h1>}
            <button onClick={() => dispatch(increment(5))}>+</button>
            <button onClick={() => dispatch(decrement(5))}>-</button>
            {count}
        </div>
    );
}

export default Home;