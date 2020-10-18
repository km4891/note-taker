const router = require('express').Router();
const notes = require('../../db/database');

router.get("/notes", function(req, res) {
    notes
      .allNotes()
      .then(notes => res.json(notes))
      .catch(err => res.status(500).json(err));
  });



module.exports = router;