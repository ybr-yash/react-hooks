import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UseStateHook from './useState/UseStateHook';
import UseEffectHook from './useEffect/UseEffectHook';
import UseContextHook from './useContext/UseContextHook';
import UseReducerHook from './useReducer/UseReducerHook';
import UseCallbackHook from './useCallback/UseCallbackHook';
import UseMemoHook from './useMemo/UseMemoHook';
import UseRefHook from './useRef/UseRefHook';
import UseImperativeHandleHook from './useImperativeHandle/UseImperativeHandleHook';

function App() {
  return (
    <div className="App">
      <Router>
        <nav className='navigation'>
          <Link to="/"> Home </Link>
          <Link to="usestate"> useState Demo </Link>
          <Link to="useeffect"> UseEffectHook Demo </Link>
          <Link to="usecontext"> UseContextHook Demo </Link>
          <Link to="usereducer"> UseReducerHook Demo </Link>
          <Link to="usecallback"> UseCallbackHook Demo </Link>
          <Link to="usememo"> UseMemoHook Demo </Link>
          <Link to="useref"> UseRefHook Demo </Link>
          <Link to="useimperativeHandlehook"> UseImperativeHandleHook Demo </Link>
        </nav>
        <Routes>
          <Route path="usestate" element={<UseStateHook/>} />
          <Route path="useeffect" element={<UseEffectHook/>} />
          <Route path="usecontext" element={<UseContextHook/>} />
          <Route path="usereducer" element={<UseReducerHook/>} />
          <Route path="usecallback" element={<UseCallbackHook/>} />
          <Route path="usememo" element={<UseMemoHook/>} />
          <Route path="useref" element={<UseRefHook/>} />
          <Route path="useimperativeHandlehook" element={<UseImperativeHandleHook/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
