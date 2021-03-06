/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {


  //  ╦ ╦╔═╗╔╗ ╔═╗╔═╗╔═╗╔═╗╔═╗
  //  ║║║║╣ ╠╩╗╠═╝╠═╣║ ╦║╣ ╚═╗
  //  ╚╩╝╚═╝╚═╝╩  ╩ ╩╚═╝╚═╝╚═╝

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': {
    action: 'home'
  },
  'post /register' : 'AccountController.registerAccount',
  'post /login' : 'AccountController.loginAccount',
  'get /logout' : 'AccountController.logoutAccount',
  'post /updateAccount' : 'AccountController.updateAccount',
  'get /account' : 'AccountController.getAccountInfo',
 


  'get /admin' : 'AdminController.getAdminPage',
  'get /supports' : 'AdminController.getSupports', 
  'post /supports' : 'AdminController.updateSupports',

  'get /posts' : 'PostController.getPosts',
  'get /mytimes' : 'PostController.getMyPosts',
  'get /publicPosts' : 'PostController.getPublicPosts',
  'get /getImageAlbum' : 'PostController.getImageAlbum',
  'post /post' : 'PostController.createPost',
  'post /createLink' : 'LinkController.createLink',
  'post /updateLink' : 'LinkController.updateLink',
  'get /user/:id' : 'AccountController.getUser',


  'get /talks' : 'TalkController.getTalks',
  'get /talk/:id' : 'TalkController.getTalk',

  'get /friends' : 'LinkController.getFriends',
  'post /addFriend' : 'LinkController.addFriend',
  'post /uploadImage' : 'FileController.uploadAvatar',

  'post /createChat' : 'ChatController.createChat',

  'get /findUser' : 'SocketController.findUser',
  'post /online' : 'SocketController.online',
  'post /sendMessage' : 'SocketController.sendMessage',
  'post /joinRoom' : 'SocketController.joinRoom'

  

  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


  //  ╔═╗╔═╗╦  ╔═╗╔╗╔╔╦╗╔═╗╔═╗╦╔╗╔╔╦╗╔═╗
  //  ╠═╣╠═╝║  ║╣ ║║║ ║║╠═╝║ ║║║║║ ║ ╚═╗
  //  ╩ ╩╩  ╩  ╚═╝╝╚╝═╩╝╩  ╚═╝╩╝╚╝ ╩ ╚═╝



  //  ╦ ╦╔═╗╔╗ ╦ ╦╔═╗╔═╗╦╔═╔═╗
  //  ║║║║╣ ╠╩╗╠═╣║ ║║ ║╠╩╗╚═╗
  //  ╚╩╝╚═╝╚═╝╩ ╩╚═╝╚═╝╩ ╩╚═╝


  //  ╔╦╗╦╔═╗╔═╗
  //  ║║║║╚═╗║
  //  ╩ ╩╩╚═╝╚═╝


};
