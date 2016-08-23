let nextTodoId = 0;

export const ADD_TODO = 'ADD_TODO';

export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    id: nextTodoId++,
    text
  };
};

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  };
};

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  };
};

export const getRandomQuote = ()=> {
  return {};
};

export const encrypt = ()=> {
  return {};
};

export const decrypt = ()=> {
  return {};
};

// export function addPostRequest(post) {
//   return (dispatch) => {
//     return callApi('posts', 'post', {
//       post: {
//         name: post.name,
//         title: post.title,
//         content: post.content,
//       },
//     }).then(res => dispatch(addPost(res.post)));
//   };
// }
