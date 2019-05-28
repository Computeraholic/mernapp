/*Se puede usar esta función a nivel de componentes pero a nivel de mantenimiento es un lío*/

/*Se le pasa como argumento al post además de la ruta, username y password*/

/*Con el catch se maneja el error a nivel de cliente al igual que a nivel de servidor, pero a nivel de cliente no se va
a hacer en este curso*/


import API from './api';

export {
  login,
  getAllPosts,
  getMyPosts,
  postNewPost,
  putExistingPost,
  deletePost,
  postNewUser
};

function login(username, password) {
  return API.post('/users/signin', {
    username,
    password
  }).then(result => result.data)
  .catch(function(error){
        //TODO When an error status is sent by server (also in the rest of calls!)
  });
}

function getAllPosts() {
  return API.get('/posts').then(res => res.data);
}

function getMyPosts(iduser) {
  return API.get('/posts/all/'+iduser).then(res => res.data);
}

function postNewUser(username, password, fullname, email, role) {
  return API.post('/users', {
    username,
    password,
    fullname,
    email,
    role }).then(result => result.data);
}

function postNewPost(iduser, title, description) {
  return API.post('/posts', {
    iduser,
    title,
    description}).then(result => result.data);
}

function putExistingPost(idpost, title, description) {
  return API.put('/posts/'+idpost, {
    title,
    description}).then(result => result.data);
}

function deletePost(idpost) {
  return API.delete('/posts/'+idpost).then(result => result.data);
}
