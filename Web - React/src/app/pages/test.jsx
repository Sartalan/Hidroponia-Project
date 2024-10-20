import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../../store'


export function Test(){
        const count = useSelector((state) => state.counter.value);
        const dispatch = useDispatch();
      
        return (
          <div>
            <h1>Counter: {count}</h1>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
          </div>
        );
}