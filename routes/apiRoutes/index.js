const router = require('express').Router();
const database = require('../../db/database');

// get notes 
router.get('/notes', (req, res) => {
    database
      .allNotes()
      .then(notes => res.json(notes))
      .catch(err => res.status(500).json(err));
  });

  // save notes
router.post('/notes', (req, res) => {
    database
    .addNote(req.body)
    .then((note) => res.json(note))
    .catch(err => res.status(500).json(err));
});

// will delete note from server
router.delete('/notes/:id', (req, res) => {
    database
    .removeNote(req.params.id)
    .then(() => res.json({ ok: true }))
    .catch(err => res.status(500).json(err));
});



module.exports = router;
