import React, { useReducer } from "react";
import './App.css';
import Usestate from './UseStateHook/Usestate';
import UsestateArray from './UseStateHook/UsestateArray';
import UsestateObject from './UseStateHook/UsestateObject';
import UsestatePrev from './UseStateHook/UsestatePrev';
import Img from "./Imgs/Update.png";
import Useeffect from './UseEffectHook/Useeffect';
import UseeffectMouse from './UseEffectHook/UseeffectMouse';
import UseeffectCleanup from './UseEffectHook/UseeffectCleanup';
import UseeffectCounter from './UseEffectHook/UseeffectCounter';
import DataFetching from './DataFetching/DataFetching';
import ComponentA from './UsecontextHook/ComponentA';
import Usereducer from "./Usereducer/Usereducer";
import UsereducerComplex from "./Usereducer/UsereducerComplex";
import MultipleuseReducer from "./Usereducer/MultipleuseReducer";
import CompA from "./useReducer&useContext/CompA";
import CompB from "./useReducer&useContext/CompB";
import CompC from "./useReducer&useContext/CompC";
import DataFetchinguseState from "./FetchDatauseReducer/DataFetchinguseState";
import DataFetchinguseReducer from "./FetchDatauseReducer/DataFetchinguseReducer copy";
import ParentComponent from "./useCallbackHook/ParentComponent";
import UseMemo from "./useMemoHook/UseMemo";
import Focus from "./useRefs/Focus";
import ClassTimer from "./useRefs/ClassTimer";
import FuncTimer from "./useRefs/FuncTimer";
import DocTitleOne from "./CustomHook/DocTitleOne";
import DocTitleTwo from "./CustomHook/DocTitleTwo";
import CounterOne from "./CustomHook/CounterOne";
import CounterTwo from "./CustomHook/CounterTwo";
import UserForm from "./CustomHook/UserForm";

export const UserContext = React.createContext()
export const AgeContext = React.createContext()
export const CountContext = React.createContext()

const initialState = 0
const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'reset':
      return initialState
    default:
      return state
  }
}


function App() {
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div className="App">
      <div className='Inline'>
        <img src={Img} alt='Img' width='100' />
        <h1 className='Heading'>App.jsx</h1>
      </div>
      {/* ========================== Custom Hook ============================= */}
      {/* <UserForm /> */}
      {/* <CounterOne /> */}
      {/* <CounterTwo /> */}
      {/* <DocTitleOne /> */}
      {/* <DocTitleTwo /> */}


      {/* ========================== Three more Hook ============================= */}
      {/* useImperativeHandles() - useLayoutEffect() - useDebugvalue() */}



      {/* ========================== useRef Hook ============================= */}
      {/* <FuncTimer /> */}
      {/* <ClassTimer /> */}
      {/* <Focus /> */}



      {/* ========================== useMemo Hook ============================= */}
      {/* <UseMemo /> */}


      {/* ========================== useCallback hook ============================= */}
      {/* <ParentComponent /> */}



      {/* ========================== useReducer Hook for Fetching Data ============================= */}
      {/* <DataFetchinguseReducer /> */}
      {/* <DataFetchinguseState /> */}



      {/* ========================== useReducer Hook & useContext ============================= */}
      {/* Count Value accessed and shared Globally */}
      {/* <CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>
        <div>Count - {count}</div>
        <CompA />
        <CompB />
        <CompC />
      </CountContext.Provider> */}

      {/* ========================== useReducer Hook ============================= */}
      {/* <MultipleuseReducer /> */}
      {/* <UsereducerComplex /> */}
      {/* <Usereducer /> */}



      {/* ========================== useContext Hook ============================= */}
      {/* <UserContext.Provider value={{count,setCount}}>  //For multiple Values */}
      {/* <UserContext.Provider value={'Rahat'}>
        <AgeContext.Provider value={21}>
          <ComponentA />
        </AgeContext.Provider>
      </UserContext.Provider> */}



      {/* ========================== useEffect Hook for
       Fetching Data ============================= */}
      {/* <DataFetching /> */}



      {/* ========================== useEffect Hook ============================= */}
      {/* <UseeffectCounter /> */}
      {/* <UseeffectCleanup /> */}
      {/* <UseeffectMouse /> */}
      {/* <Useeffect /> */}



      {/* ========================== useState Hook ============================= */}
      {/* <UsestateArray /> */}
      {/* <UsestateObject /> */}
      {/* <UsestatePrev /> */}
      {/* <Usestate /> */}
    </div>
  );
}

export default App;
