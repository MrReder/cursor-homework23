import './App.css';
import { AddPost } from './components/add-post';
import { Posts } from './store';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(AddPost());
  }, [dispatch]);

  return (
    <div className="App">
      <AddPost />
      <Posts />
    </div>
  );
}

export default App;
