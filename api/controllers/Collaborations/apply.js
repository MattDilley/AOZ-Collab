module.exports = async function applyCollab (req, res) {

  // hacky hacky... until logins actualyl work - I'm auto-logging in the session to userId:1
  req.session.userId = 1;
/*
  friendlyName: 'List Collabs',
  description: 'Display "Collab Search" page.',

  inputs: {
    userId: {
      description: 'the Id of the user to look up',
      type: 'number',
      required: true
    }
  },

  exits: {
    success: {
      responseType: 'view',
      viewTemplatePath: 'pages/search'
    },
    notFound: {
      description: 'no user found with the specified ID',
      responseType: 'notFound'
    }
  },
  fn: async function ({$userId}) {
  */
/*
    var userId = req.param('userId');
    if (isNaN(userId)) {
      return res.badRequest(new Error('No user ID specified!'));
    }

    var user = await User.findOne({ id: userId });
*/
    if (isNaN(req.param('collabId'))){
      var collabId = 1;
    } else {
      var collabId = req.param('collabId');
    }

    var collab = await Collaboration.find({
        where: { id: collabId }
    })
    .populate('admin')
    .populate('owners');

    var owner_ids = [];
    for (var i in collab[0].owners) {
      owner_ids[i] = collab[0].owners[i].id
    }


    // fetch the user info... hard-coding to user-id:1 right now
    var user = await User.find({
        where: { id: req.session.userId }
    })

    return res.view('pages/apply', {collab: collab[0],owner_ids: owner_ids, user: user[0]});
};
