const router = require('express').Router();
const database = require('../../db/database');

router.get('/notes', function(req, res) {
    database
      .allNotes()
      .then(notes => res.json(notes))
      .catch(err => res.status(500).json(err));
  });

router.post('/notes', (req, res) => {
    database
    .addNote(req.body)
    .then((note) => res.json(note))
    .catch(err => res.status(500).json(err));
})



module.exports = router;
