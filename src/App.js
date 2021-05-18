import './App.css';
import AddPost from './components/add-post';
import Posts from './pages/posts';

const App = () => {

  return (
    <div className="App">
      <AddPost />
      <Posts />
    </div>
  );
}



export default App;
