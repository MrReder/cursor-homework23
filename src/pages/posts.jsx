import { Post } from '../components/post';
import '../App.css';
import '../post.css';
import { useSelector } from 'react-redux';

const Posts = () => {
    const posts = useSelector(state => state.postsList);
    return (
        <div className="App">
            {posts.map((post, index) => <Post {...post} key={index} />)}
        </div>
    );
}



export default Posts;

