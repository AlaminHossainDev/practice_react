// import './Post.css'
// export default function Post({post}){
//     const {title, body, id, userId} =post;
//     return(
//         <div className='post-style'>
//             <h5>Title </h5>
//             <p><small>UserId</small></p>
//             <p><small>Author</small></p>
//             <p></p>
//         </div>

//     )
// }

import './Post.css';

export default function Post({ post }) {
    const { title, body, id, userId } = post;
    console.log(post);

    return (
        <div className='post-style'>
            <h4>Title: {title}</h4>
            <p><small>User ID: {userId}</small></p>
            <p><small>Post ID: {id}</small></p>
            <p>{body}</p>
        </div>
    );
}
