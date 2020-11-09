import React from "react";
/**
 * 
 * @param {JSON} props 
 * each json contains name and dexription which we take and display in the post
 * Each post will have an option to 1. LIKE
 *                                  2.Comment( Checks if input box is empty or not and then resets it to empty after comment is made)
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
  /**
   * if comment input box is empty and user clicks on comment button
   * he will be alerted to type a text
   * once a comment is made the input text field is set to empty again
   */
  const addComment = () => {
    if(searchRef.current.value===''){
      alert('Please type some text to comment')
    }
    else{
    let newC = searchRef.current.value;
    let line = comment;
    line.push(newC);
    setComment([...line]);
    searchRef.current.value='';
    }
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
          <p className="added-comment" key={index} style={{paddingLeft:"5px"}}>
            {value}
          </p>
        );
      })}
    </div>
  );
}

export default Post;
