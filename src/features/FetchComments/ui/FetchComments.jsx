import { useEffect, useState } from "react";

function FetchComments() {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    try {
      fetch("https://dummyjson.com/comments?limit=6")
        .then((response) => response.json())
        .then((data) => setComments(data.comments));
    } catch (error) {
      console.log("ERROR ==>", error);
    }
  }, []);

  return comments;
}

export { FetchComments };
