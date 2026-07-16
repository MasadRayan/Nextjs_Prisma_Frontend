export const getAllBlogs = async () => {
    "use cache";
    const posts = await fetch("https://jsonplaceholder.typicode.com/posts",
        {
            cache: "force-cache",
        }
    )

    const postData = await posts.json();

    return postData
}