const COMMENTS_URL = "https://jsonplaceholder.typicode.com/comments";

interface Post {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

const getData = async <T>(url: string): Promise<T> => {
  const response = await fetch(url);
  if (response.ok) {
    return response.json();
  }
  throw new Error("Something went wrong");
};

getData<Post[]>(COMMENTS_URL)
  .then((data) => {
    console.log(data);
    data.forEach((post) => {
      console.log(`ID: ${post.id}, Email: ${post.email.split("@")[0]}...`);
    });
  })
  .catch((e) => {
    console.log(e);
  });
