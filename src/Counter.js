import React, {useState} from 'react';
import OddEventResult from './OddEventResult';

const Counter = ({initialValue}) => {

    const [count, setCount] = useState(initialValue);
    //count를 setCount로 변경시킬 수 있음

    const Increase=() => {
        setCount(count + 1);
    };

    const Decrease=() => {
        setCount(count - 1);
    };

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={Increase}>+</button>
            <button onClick={Decrease}>-</button>
            <OddEventResult count={count}/>
        </div>
    );
};

Counter.defaultProps = {
    initialValue: 0,
}; //전달받은 props값 기본설정은 무조건 0

export default Counter;