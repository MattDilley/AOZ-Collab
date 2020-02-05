module.exports = async function welcomeUser (req, res) {
  // hacky hacky... until logins actualyl work - I'm auto-logging in the session to userId:1
  req.session.userId = 1;

    /*
    if (isNaN(req.param('input-search'))){
      var searchStr = "";
    } else {
      var searchStr = req.param('input-search');
    }
    */
    var searchStr = req.param('input-search','');


    if (searchStr !== "") {
      var collabs = await Collaboration.find(
        {
          where: { title: searchStr }
        }
      ).populate('admin');
    } else {
      var collabs = await Collaboration.find().populate('admin');
    }
    return res.view('pages/search', {collabs: collabs});
};
