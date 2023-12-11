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


function groupById(arr) {
    return arr.reduce((obj, value) => {
        obj[value.id] = value;
        for (let i = 0; i < value.comments.length; i++) {
            obj[value.comments[i].id] = value.comments[i];
        }
        for (let i = 0; i < value.comments.length; i++) {
            obj[value.comments[i].author.id] = value.comments[i].author;
        }
        obj[value.author.id] = value.author;
        return obj;
    }, {})
}

let postsById = groupById(posts);










