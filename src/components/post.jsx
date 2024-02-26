import { TiUserDelete } from "react-icons/ti";
import styles from "./post.module.css";
import { useContext } from "react";
import { StoredItem } from "../store/storedItems";

function Post({ item }) {
  const { deletePost } = useContext(StoredItem);

  return (
    <div className={`card ${styles.cardContainer}`} style={{ width: "30rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {item.title}
          <span
            className={`position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark ${styles.deleteBadge} `}
            onClick={() => deletePost(item.id)}
          >
            <TiUserDelete />
            <span className="visually-hidden ">unread messages</span>
          </span>
        </h5>
        <p className="card-text">{item.body}</p>
        {item.tags.map((tag) => (
          <span
            key={tag}
            className={`badge text-bg-secondary ${styles.tagClass}`}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
export default Post;
