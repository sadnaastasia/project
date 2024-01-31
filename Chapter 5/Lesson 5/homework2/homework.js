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


// function getPostBodies(posts) {
//     let onlyBody = posts.map(post => post.body);
//     return onlyBody;
// }
// console.log(getPostBodies (posts));


// function filterPostsByCommentsLength(posts, minNumberOfComments) {
//     return posts.filter(post => post.comments.length >= minNumberOfComments);
// }

// console.log(filterPostsByCommentsLength(posts, 2));


// function filterPostsByNumberOfLikesInComments(posts, minNumberOfLikes) {
//     let postFilteredByComments = posts.filter(post => post.comments.every(comments => comments.numberOfLikes >= minNumberOfLikes));
//     return postFilteredByComments;
// }
// console.log(filterPostsByNumberOfLikesInComments(posts, 20));


// function calculateTotalNumberOfLikesUnderAllPosts(posts) {
//     let totalSumOfLikesUnderAllPosts = posts.reduce((sum, post) => sum + post.numberOfLikes, 0);
//     return totalSumOfLikesUnderAllPosts;
// }
// console.log(calculateTotalNumberOfLikesUnderAllPosts(posts));


// function getListOfComments(posts) {
//     return posts.reduce((listOfComments, post) => {
//         return listOfComments.concat(post.comments);
//     }, [])
// }

// function findMostPopularEntity(elems) {
//     return elems.reduce((mostPopularElem, elem) => {
//         return mostPopularElem.numberOfLikes > elem.numberOfLikes
//             ? mostPopularElem
//             : elem;
//     });
// }


// function findMostPopularPost(posts) {
//     if (!posts || posts.length < 1) return null;
//     let mostPopularPost = findMostPopularEntity(posts);
//     return mostPopularPost;
// }
// console.log(findMostPopularPost(posts));


// function findMostPopularComment(posts) {
//     let comments = getListOfComments(posts);
//     let mostPopularComment = findMostPopularEntity(comments);
//     return mostPopularComment;
// }
// console.log(findMostPopularComment(posts));


// function getSortedListOfComments(posts) {
//     let comments = getListOfComments(posts);
//     comments.sort((a, b) => {
//         if (a.numberOfLikes == b.numberOfLikes) return a.text.localeCompare(b.text)
//         return b.numberOfLikes - a.numberOfLikes;
//     });
//     return comments;
// }
// console.log(getSortedListOfComments(posts));


function getArrayOfAuthorsOfComments(posts) {
    let arrayOfAuthorsOfComments = posts.reduce((authorsArray, post) => {
        return authorsArray.concat(post.comments.map(comment => comment.author));
    }, []);
    return arrayOfAuthorsOfComments;
}


function getMapOfAuthorsAndNumberOfComments(posts) {
    let arrayOfAuthorsOfComments = getArrayOfAuthorsOfComments(posts);
    let mapOfAuthorsAndNumberOfComments = new Map();
    for (let i = 0; i < arrayOfAuthorsOfComments.length; i++) {
        if (mapOfAuthorsAndNumberOfComments.has(arrayOfAuthorsOfComments[i].id)) {
            mapOfAuthorsAndNumberOfComments.set(arrayOfAuthorsOfComments[i].id, 
                mapOfAuthorsAndNumberOfComments.get(arrayOfAuthorsOfComments[i].id) + 1);
        } else {
            mapOfAuthorsAndNumberOfComments.set(arrayOfAuthorsOfComments[i].id, 1);
        }
    }
    return mapOfAuthorsAndNumberOfComments;
}


function findAuthorOfMostComments(posts) {
    let mapOfAuthorsAndNumberOfComments = getMapOfAuthorsAndNumberOfComments(posts);
    let authorOfMostComments = [0, 0];
    for (let entry of mapOfAuthorsAndNumberOfComments.entries()) {
        if (authorOfMostComments[1] < entry[1]) authorOfMostComments = entry;
    }
    return authorOfMostComments[0];
}
console.log(findAuthorOfMostComments(posts));


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










