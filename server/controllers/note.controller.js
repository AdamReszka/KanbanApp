import Lane from '../models/lane';
import Note from '../models/note';
import uuid from 'uuid';

export function getSomething(req, res) {
  return res.status(200).end();
}

export function addNote(req, res) {
  const { note, laneId } = req.body;

  if (!note || !note.task || !laneId) {
    res.status(400).end();
  }

  const newNote = new Note({
    task: note.task,
  });

  newNote.id = uuid();
  newNote.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    Lane.findOne({ id: laneId })
      .then(lane => {
        lane.notes.push(saved);
        return lane.save();
      })
      .then(() => {
        res.json(saved);
      });
  });
}

export function updateNote(req, res) {
  Lane.findOne({ id: req.params.laneId })
    .then(lane => {
      lane.notes.findOne({ id: req.params.noteId }).exec((err, note) => {
        if (err) {
          res.status(500).send(err);
        }
        note.update({ id: req.params.noteId }, req.body.note.task).exec((err, note) => {
          if (err) {
            res.status(500).send(err);
          }
          res.json({ note });
        });
      });
    });
}

export function deleteNote(req, res) {
  Lane.findOne({ id: req.params.laneId })
    .then(lane => {
      lane.notes.findOne({ id: req.params.noteId }).exec((err, note) => {
        if (err) {
          res.status(500).send(err);
        }
        note.remove(() => {
          res.status(200).end();
        });
      });
    });
}
