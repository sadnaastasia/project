const posts = [
  {
      id: "post1",
      author: {
          id: "user1",
          name: "Ivan",
      },
      body: "My first post.",
      numberOfLikes: 9,
      comments: [
          {
              id: "comment1",
              author: {
                  id: "user2",
                  name: "Pavel",
              },
              text: "Cool!",
              numberOfLikes: 20,
          },
          {
              id: "comment2",
              author: {
                  id: "user3",
                  name: "Anton",
              },
              text: "Super!",
              numberOfLikes: 32,
          }
      ],
  },
  {
      id: "post2",
      author: {
          id: "user1",
          name: "Ivan",
      },
      body: "Another post.",
      numberOfLikes: 10,
      comments: [
          {
              id: "comment3",
              author: {
                  id: "user4",
                  name: "Evgenia",
              },
              text: "Keep posting!",
              numberOfLikes: 5,
          },
          {
              id: "comment4",
              author: {
                  id: "user2",
                  name: "Pavel",
              },
              text: "Great!",
              numberOfLikes: 50,
          }
      ],
  },
  {
      id: "post3",
      author: {
          id: "user1",
          name: "Ivan",
      },
      body: "I've done it!",
      numberOfLikes: 40,
      comments: [
          {
              id: "comment5",
              author: {
                  id: "user5",
                  name: "Diana",
              },
              text: "Congrats!",
              numberOfLikes: 1,
          },
      ],
  },
];

// let onlyBody = posts.map (post => post.body);

// let postFiltered = posts.filter(post => post.numberOfLikes >= 2);

// let postFilteredByComments = posts.filter(post => filterByComments (post));

// function filterByComments (arr) {
//     for (let i = 0; i < arr.comments.length; i++) {
//         if (arr.comments[i].numberOfLikes < 20) return false;
//     } return arr;
// }

// let totalSumOfLikesUnderAllPosts = posts.reduce((sum, post) => sum + post.numberOfLikes, 0);

// let maxLikes = 0;
// let mostPopularPost = posts.reduce((obj, post) => findMostPopularPost(obj, post), {});
// function findMostPopularPost(obj, post) {
//     let likes = post.numberOfLikes;
//     maxLikes = Math.max(likes, maxLikes);
//     if (maxLikes > likes) return obj;
//     obj = post;
//     return obj;
// }

// let maxLikes = 0;
// let mostPopularComment = posts.reduce((obj, post) => findMostPopularComment(obj, post), {});
// function findMostPopularComment(obj, post) {
//     for (let i = 0; i < post.comments.length; i++) {
//         let likes = post.comments[i].numberOfLikes;
//         maxLikes = Math.max(likes, maxLikes);
//         if (maxLikes > likes) continue;
//         obj = post.comments[i];
//     }
//     return obj;
// }

// let comments = posts.reduce((obj, post) => mapComments(obj, post), []);
// function mapComments(obj, post) {
//     for (let i = 0; i < post.comments.length; i++) {
//         obj.push(post.comments[i])
//     }
//     return obj;
// }
// comments.sort(sortComments);
// function sortComments(a, b) {
//     return b.numberOfLikes - a.numberOfLikes;
// }

// let athorsOfComments = posts.reduce((author, post) => findAuthorsOfComments(author, post), []);
// function findAuthorsOfComments(author, post) {
//     for (let i = 0; i < post.comments.length; i++) {
//         author.push(post.comments[i].author.id);
//     }
//     return author;
// }

// function findRepeatedAuthor(author) {
//     for (let i = 0; i < author.length - 1; i++) {
//         for (let j = 1; j < author.length; j++) {
//             if (author[j] == author[i]) return author[j];
//         }
//     }
// }

// findRepeatedAuthor(athorsOfComments);


function normalizeState(arr) {
    function groupById(arr) {
        return arr.reduce((arr, value) => {
            arr[value.id] = value;
            return arr;
        }, {})
    }

    let posts = arr.reduce((posts, value) => {
        posts.push(value);
        return posts;
    }, []);

    posts = groupById(posts);

    arr.posts = {};
    arr.posts.byId = posts;
    arr.posts.allIds = arr.reduce((arr, post) => {
        arr.push(post.id);
        return arr;
    }, []);

    let comments = arr.reduce((comments, value) => {
        for (let i = 0; i < value.comments.length; i++) {
            comments.push(value.comments[i]);
        }
        return comments;
    }, []);

    comments = groupById(comments)

    arr.comments = {};
    arr.comments.byId = comments;
    arr.comments.allIds = arr.reduce((arr, post) => {
        for (let i = 0; i < post.comments.length; i++) {
            arr.push(post.comments[i].id);
        }
        return arr;
    }, []);

    let users = arr.reduce((authors, value) => {
        authors.push(value.author);
        for (let i = 0; i < value.comments.length; i++) {
            authors.push(value.comments[i].author);
        }
        return authors;
    }, [])

    users = groupById(users);

    arr.users = {};
    arr.users.byId = users;
    arr.users.allIds = arr.reduce((arr, post) => {
        arr.push(post.author.id);
        for (let i = 0; i < post.comments.length; i++) {
            arr.push(post.comments[i].author.id);
        }
        return arr;
    }, []);

    let arr2 = {};
    arr2.posts = arr.posts;
    arr2.comments = arr.comments;
    arr2.users = arr.users;

    return arr2;
}

let normalizedState = normalizeState(posts);










