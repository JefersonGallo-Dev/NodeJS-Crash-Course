const posts = [
    {id: 1, title: "Post One"},
    {id: 2, title: "Post Two"}
];


// Option 1 to export //
// export const getPosts = () => posts; 

const getPosts = () => posts; 
// Option 2 to export //
// export {getPosts};

// Option 3 to export //
export default getPosts;

// Option 4 to export Using default //
export const getPostsLenght = () => posts.length;



