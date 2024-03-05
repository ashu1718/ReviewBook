import { StoredItem } from "../store/storedItems";
import Post from "./post";
import styles from "./postitems.module.css";
import { useContext, useEffect, useState } from "react";
import EmptyMessage from "./empty_message";
import Loading from "./loading";
import { useNavigate } from "react-router-dom";
const PostItems = ({ setcurrTab }) => {
  const { postList, fetching } = useContext(StoredItem);

  return (
    <>
      <div className={styles.reviewButton}></div>
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
