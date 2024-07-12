//for previews of posts so when we click on it will redirect to the complete article 

import { Link } from "react-router-dom";
import postsService from "../appwriteServices/postsService";

function PostCard({
    $id,            //this is the id of the post doc in the db and in appwrite they name it $id not _id 
    title,
    image,          //image id hi store kri hai hmne db mein 
}) {
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-gray-100 rounded-xl p-4'>
            <div className='w-full justify-center mb-4'>
                <img 
                    className='rounded-xl' 
                    src={postsService.getFilePreview(image)} 
                    alt={title}
                />
            </div>
            <h2 className='text-xl font-bold'>{title}</h2>
        </div>
    </Link>
  )
}

export default PostCard