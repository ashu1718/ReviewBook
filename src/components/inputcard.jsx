import { useContext, useRef } from "react";
import { StoredItem } from "../store/storedItems";
import { useNavigate } from "react-router-dom";

function InputCard() {
  const nameElement = useRef();
  const reviewElement = useRef();
  const hashTagElement = useRef();
  const userIdElement = useRef();
  const { addPost } = useContext(StoredItem);
  const navigate = useNavigate();

  const handleAdd = () => {
    const userId = userIdElement.current.value;
    const name = nameElement.current.value;
    const review = reviewElement.current.value;
    const hashTags = hashTagElement.current.value.split(" ");
    nameElement.current.value = "";
    reviewElement.current.value = "";
    hashTagElement.current.value = "";
    userIdElement.current.value = "";
    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: userId,
        title: name,
        body: review,
        tags: hashTags,
      }),
    })
      .then((res) => res.json())
      .then((post) => {
        addPost(post);
        navigate("/");
      });
  };

  return (
    <div className="Input-form">
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput3" className="form-label">
          Your UserId:
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput3"
          placeholder="123"
          ref={userIdElement}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Your Name:
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Ashutosh Mathur"
          ref={nameElement}
        />
      </div>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          placeholder="Please Enter Your View"
          ref={reviewElement}
        ></textarea>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput2" className="form-label">
          Hashtags
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput2"
          placeholder="space separated HashTags"
          ref={hashTagElement}
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary"
        onClick={() => handleAdd()}
      >
        Post
      </button>
    </div>
  );
}
export default InputCard;
