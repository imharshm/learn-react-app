import axios from "axios";
import { useEffect, useState } from "react";

const Images = () => {
  const [posts, setPosts] = useState();

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos/")
      .then((response) => {
        //console.log(response.data);
        setPosts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [posts]);

  return (
    <div className="row p-4">
      {posts &&
        posts.map((post, i) => {
          return (
            <div className="col-4 mb-4">
              <div className="card border p-3">
                <img
                  key={post.id}
                  className="rounded"
                  src={post.url}
                  alt={post.title}
                  loading="lazy"
                />
              </div>
            </div>
          );
        })}
    </div>
  );
};
export default Images;
