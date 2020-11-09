import React from "react";
/**
 * 
 * @param {JSON} props 
 * each json contains name and dexription which we take and display in the post
 * Each post will have an option to 1. LIKE
 *                                  2.Comment
 * Onclick of comment the value entered in the input box will be added as a comment to the comment state and be displayed
 */
function Post(props) {
  //state to maintain an array of comments on each post
  const [comment, setComment] = React.useState([]);
  //check if post is liked or not
  const [liked, setLiked] = React.useState(false);
 //ref to input field for comment
  const searchRef = React.useRef(null);
  //onClick of like button changes liked state
  const handleClick = () => {
    if (liked) {
      setLiked(false);
    } else {
      setLiked(true);
    }
  };
//adds the value in input field to comment state
  const addComment = () => {
    let newC = searchRef.current.value;
    let line = comment;
    line.push(newC);
    setComment([...line]);
  };

  const label = liked ? "Unlike" : "Like";
  return (
    <div className="Post">
      <div>
        <h2>{props.data.name}</h2>
        <p style={{ paddingTop: "20px" }}>{props.data.description}</p>
      </div>
      <div className="comment-section">
        <button
          className="btn btn-primary"
          onClick={handleClick}
          style={{ backgroundColor: "blue", color: "white" }}
        >
          {label}
        </button>
        <input
          classname="comment-text"
          type="text"
          placeholder="Add Comment"
          ref={searchRef}
        />
        <button onClick={addComment}>Comment</button>
      </div>
      {comment.map((value, index) => {
        return (
          <p className="added-comment" key={index}>
            {value}
          </p>
        );
      })}
    </div>
  );
}

export default Post;
