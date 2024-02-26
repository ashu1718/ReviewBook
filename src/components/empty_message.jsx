import { StoredItem } from "../store/storedItems";
import styles from "./empty_message.module.css";
import { useContext } from "react";
const EmptyMessage = () => {
  return (
    <>
      <div className={styles["empty-class"]}>
        <h1>No Post Yet</h1>
      </div>
    </>
  );
};
export default EmptyMessage;
