import { createContext, useReducer, useState, useEffect } from "react";

export const StoredItem = createContext({
  postList: [],
  addPost: () => {},

  fetching: false,
  deletePost: () => {},
});
const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "Add_Item") {
    newPostList = [action.payload, ...currPostList];
  } else if (action.type === "Delete_Item") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.itemId
    );
  } else if (action.type === "add_posts_from_server") {
    newPostList = [...currPostList, ...action.payload.posts];
  }
  console.log(newPostList);
  return newPostList;
};
const StoredItemProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);
  const [fetching, setfeching] = useState(false);

  const addPost = (post) => {
    dispatchPostList({
      type: "Add_Item",
      payload: post,
    });
  };
  const deletePost = (itemId) => {
    console.log(itemId);
    dispatchPostList({
      type: "Delete_Item",
      payload: {
        itemId,
      },
    });
  };
  const addPostsfromServer = (posts) => {
    dispatchPostList({
      type: "add_posts_from_server",
      payload: {
        posts,
      },
    });
  };

  useEffect(() => {
    setfeching(true);
    const controller = new AbortController();
    const signal = controller.signal;
    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addPostsfromServer(data.posts);
        setfeching(false);
      });
    return () => {
      controller.abort();
    };
  }, []);
  return (
    <StoredItem.Provider value={{ postList, addPost, deletePost, fetching }}>
      {children}
    </StoredItem.Provider>
  );
};

export default StoredItemProvider;
