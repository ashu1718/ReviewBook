import { StoredItem } from "../store/storedItems";
import Post from "./post";
import styles from "./postitems.module.css";
import { useContext, useEffect, useState } from "react";
import EmptyMessage from "./empty_message";
import Loading from "./loading";
const PostItems = ({ setcurrTab }) => {
  const { postList, fetching } = useContext(StoredItem);

  const handleReviewClick = () => {
    setcurrTab("WriteReview");
  };

  return (
    <>
      <div className={styles.reviewButton}>
        <button className="btn btn-light" onClick={handleReviewClick}>
          Write Your Review
        </button>
      </div>
      {fetching && <Loading />}
      {!fetching && postList.length === 0 && <EmptyMessage></EmptyMessage>}
      <div className={styles["post-container"]}>
        {postList.map((item) => (
          <Post key={item.id} item={item}></Post>
        ))}
      </div>
    </>
  );
};
export default PostItems;
