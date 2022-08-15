import './DisplayPost.css'
import Post from '../Post/Post'


const DisplayPosts = (props) => {
    return(
        props.postEntry.map((post, i) =>
        <div className='displayedPost' key={i}>
            <Post post={post}/>
        </div>
        )
    )
}


export default DisplayPosts;