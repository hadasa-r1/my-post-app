import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

function AddPost() {
  const navigate = useNavigate();
  const { addPost } = useOutletContext();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [formError, setFormError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title.trim() || !body.trim()) {
      setFormError("Please enter both title and body.");
      return;
    }

    addPost({ title: title.trim(), body: body.trim() });
    navigate("/posts");
  };

  return (
    <div className="add-post-page">
      <h1>Add New Post</h1>
      <form onSubmit={handleSubmit} className="add-post-form">
        <label>
          Title
          <input
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </label>

        <label>
          Body
          <textarea
            value={body}
            onChange={(event) => setBody(event.target.value)}
          />
        </label>

        {formError && <div className="error">{formError}</div>}

        <div className="form-actions">
          <button type="button" onClick={() => navigate("/posts")}>Cancel</button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default AddPost;
