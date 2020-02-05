/**
 * Collaboration.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝


    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

    title : {
      type : 'string',
      required : true
    },
    status : {
      type : 'string',
      required : true,
      enum : ['Planning','WIP','Complete']
    },
    image : {
      type : 'string',
      required : false
    },
    genre : {
      type : 'json',
      required : true
    },
    adminType : {
      type : 'json',
      required : true
    },
    collaboratorsRequired: {
      type: 'json',
      required : false
    },
    githubLink: {
      type: 'string',
      required: false
    },
    downloadLink: {
      type: 'string',
      required: false
    },
    websiteLink: {
      type: 'string',
      required: false
    },
    description: {
      type: 'text',
      required: true,
      columnType: 'text'
    },

    // reference back to the collab owner
    admin: {
      model: 'user'
    },
    // reference back to the collab owner
    owners: {
      collection: 'user',
      via: 'collaboration',
      through: 'collaborationuser'
    }

  }

};

