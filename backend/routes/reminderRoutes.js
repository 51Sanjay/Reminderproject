import express from 'express';
import Reminder from '../models/Reminder.js';
import scheduleReminder from '../Reminder/scheduleReminder.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const reminders = await Reminder.find().sort({ date: -1 });
  res.json(reminders);
});

router.post('/', async (req, res) => {
  try {
    const reminder = await Reminder.create(req.body);
    scheduleReminder(reminder); // schedule when created
    res.json(reminder);
  } catch (err) {
    console.error('❌ Reminder create error:', err.message);
    res.status(500).json({ error: err.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const reminder = await Reminder.findByIdAndUpdate(req.params.id, req.body, { new: true });
    scheduleReminder(reminder); // re-schedule if edited
    res.json(reminder);
  } catch (err) {
    console.error('❌ Reminder update error:', err.message);
    res.status(500).json({ error: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  await Reminder.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
});

export default router;
