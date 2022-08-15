
const Post = (props) => {
    return(
       <div>
        {props.post.name}
        <br></br>
        {props.post.post}
        {/* like dislike button component called here */}
       </div>
    )
}

export default Post;
