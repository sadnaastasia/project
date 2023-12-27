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


// function showOnlyBody(posts) {
//     let onlyBody = posts.map(post => post.body);
//     return onlyBody;
// }
// showOnlyBody (posts);


// function filterPosts(posts) {
//     let postFiltered = posts.filter(post => post.comments.length >= 2);
//     return postFiltered;
// }
// filterPosts(posts);


// function filterByComments(posts) {
//     let postFilteredByComments = posts.filter((post) => {
//         for (let i = 0; i < post.comments.length; i++) {
//             if (post.comments[i].numberOfLikes < 20) return false;
//         } return post;
//     });
//     return postFilteredByComments;
// }
// filterByComments(posts);


// function calculateTheTotalSumOfLikesUnderAllPosts(posts) {
//     let totalSumOfLikesUnderAllPosts = posts.reduce((sum, post) => sum + post.numberOfLikes, 0);
//     return totalSumOfLikesUnderAllPosts;
// }
// calculateTheTotalSumOfLikesUnderAllPosts(posts);


// function findMostPopularPost(posts) {
//     if (!posts || posts.length < 1) return null;
//     posts.reduce((mostPopularPost, post) => {
//         return mostPopularPost.numberOfLikes > post.numberOfLikes ?
//         mostPopularPost :
//         post;
//     });
// }
// findMostPopularPost(posts);


// function findmostPopularComment(posts) {
//     let maxLikes = 0;
//     posts.reduce((mostPopularComment, post) => {
//         for (let i = 0; i < post.comments.length; i++) {
//             let likes = post.comments[i].numberOfLikes;
//             maxLikes = Math.max(likes, maxLikes);
//             if (maxLikes > likes) continue;
//             mostPopularComment = post.comments[i];
//         }
//         return mostPopularComment;
//     }, {});
// }
// findmostPopularComment(posts);


// function getCommentsAndSort(posts) {
//     let comments = posts.reduce((comments, post) => {
//         for (let i = 0; i < post.comments.length; i++) {
//             comments.push(post.comments[i])
//         }
//         return comments;
//     }, []);
//     comments.sort((a, b) => {
//         return b.numberOfLikes - a.numberOfLikes;
//     });
// }
// getCommentsAndSort(posts);


// function findTheAuthorOfTheMostComments(posts) {
//     let athorsOfComments = posts.reduce((author, post) => {
//         for (let i = 0; i < post.comments.length; i++) {
//             author.push(post.comments[i].author.id);
//         }
//         return author;
//     }, []);
//     for (let i = 0; i < athorsOfComments.length - 1; i++) {
//         for (let j = 1; j < athorsOfComments.length; j++) {
//             if (athorsOfComments[j] == athorsOfComments[i]) return athorsOfComments[j];
//         }
//     }
// }
// findTheAuthorOfTheMostComments(posts);


function normalizeState(posts) {
    return posts.reduce((normalizedState, post) => {
        return {
            posts: {
                byId: {
                    ...normalizedState.posts.byId,
                    [post.id]: {
                        ...post,
                        author: post.author.id,
                        comments: post.comments.map(comment => comment.id),
                    }
                },
                allIds: [...normalizedState.posts.allIds, post.id],
            },

            comments: {
                byId: {
                    ...normalizedState.comments.byId,
                    ...post.comments.reduce((commentsById, comment) => {
                        return {
                            ...commentsById,
                            [comment.id]: {
                                ...comment,
                                author: comment.author.id,
                            }
                        }
                    }, {})

                },
                allIds: [...normalizedState.comments.allIds, post.comments.map(comment => comment.id)],
            },

            users: {
                byId: {
                    ...normalizedState.users.byId,
                    [post.author.id]: post.author,
                    ...post.comments.reduce((commentAuthorById, comment) => {
                        return {
                            ...commentAuthorById,
                            [comment.author.id]: comment.author,
                        }

                    }, {}),
                },
                allIds: Array.from(new Set([
                    ...normalizedState.users.allIds,
                    post.author.id,
                    ...post.comments.map(comment => comment.author.id)
                ])),
            }
        }
    }, {
        posts: {
            byId: {},
            allIds: [],
        },
        comments: {
            byId: {},
            allIds: [],
        },
        users: {
            byId: {},
            allIds: [],
        }
    })
}

console.log(normalizeState(posts));










