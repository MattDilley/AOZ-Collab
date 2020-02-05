module.exports = async function createCollab (req, res) {

  // hacky hacky... until logins actualyl work - I'm auto-logging in the session to userId:1
  req.session.userId = 1;
    return res.view('pages/create');
};
