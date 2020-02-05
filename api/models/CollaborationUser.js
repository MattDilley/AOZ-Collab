// myApp/api/models/CollaborationUser.js
module.exports = {
  attributes: {
    owner:{
      model:'user'
    },
    collaboration: {
      model: 'collaboration'
    }
  }
}
