import { useState } from "react";

function Post({name, content, onEdit}) {

    const [post_content, setPost_content] = useState(content);
    const [isEditing, setIsEditing] = useState(false);

    const handleInputChange = (event) => {
        setPost_content(event.target.value);
    }
    //const [changed_content, setChanged_content] = useState(content);


    const handleEdit = () => {
        setIsEditing(true);
        //setChanged_content(post_content);
    }

    const handleSaveChanges = () => {
        onEdit(post_content);
        setIsEditing(false);
    }

    const handleCancelChanges = () => {
        setPost_content(content);
        setIsEditing(false);
    }

    return (
        <div style={{border: "1px solid white", margin: "10px", padding: "10px"}}>
            <h1>{name}</h1>
            <p>{content}</p>
            {isEditing ? (
                <>
                    <textarea id="changed_content" value={post_content} onChange={handleInputChange} /><br />
                    <button onClick={handleSaveChanges}>save</button>
                    <button onClick={handleCancelChanges}>cancel</button>
                </>
            ) : (
                <button onClick={handleEdit}>edit</button>
            )}
        </div>
    )
}

export default Post