import { useState } from "react";
function Post({name, content}) {

    const [post_content, setPost_content] = useState(content);

    const handleInputChange = (event) => {
        setPost_content(event.target.value);
    }

    return (
        <div style={{border: "1px solid white", margin: "10px", padding: "10px"}}>
            <h1>{name}</h1>
            <p>{post_content}</p>
            <textarea id="changed_content" placeholder="write something..." onChange={handleInputChange} />
        </div>
    )
}

export default Post