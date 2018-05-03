/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */

module.exports.policies = {

  /***************************************************************************
  *                                                                          *
  * Default policy for all controllers and actions, unless overridden.       *
  * (`true` allows public access)                                            *
  *                                                                          *
  ***************************************************************************/

  // '*': true,
  AccountController: {
    registerAccount: 'is-valid-account',
    loginAccount: 'is-valid-login',
    updateAccount: ['is-login', 'is-valid-update-account'],
    getAccountInfo: 'is-login',

  },
  AdminController: {
    getAdminPage: ['is-login', 'is-admin'],
    updateSupports: ['is-login', 'is-admin'],
  },

  PostController: {
    getPosts: ['is-login'],
    createPost: 'is-login',
  },
  SocketController: {
    online: 'is-login',
  }
};
