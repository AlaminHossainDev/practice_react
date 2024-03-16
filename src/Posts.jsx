import { useEffect, useState } from "react"
import Post from "./Post";

export default function Posts(){
    const [posts, setPosts] = useState([]);
    useEffect( ()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data))
        
    }, [])
    return(
        <div>
            <h3>Posts {posts.length} </h3>
            {posts.map(post => <Post key={post.id} post={post}></Post>)}
            {/* {posts.map(post => <Post key={post.id} post={post} />)} */}
        </div>
    )
}