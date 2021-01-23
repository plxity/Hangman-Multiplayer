const express = require('express');
const router = express.Router();
const User = require('../../Models/user');
const { check, validationResult } = require('express-validator');
const checkObjectId = require('../../Middleware/checkObjectId');
router.get('/test', async (req, res) => {
  res.json('It is working...!');
});
router.get('/listall', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
    console.log(users);
  } catch (err) {
    console.log(err);
  }
});

router.get('/getuser/:id', checkObjectId('id'), async (req, res) => {
  try {
    const userProfile = await User.findById(req.params.id);
    res.json(userProfile);
  } catch (err) {
    console.log(err);
  }
});

router.post(
  '/newuser',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').not().isEmail(),
    check('questions', 'Please enter atleast one question').isArray({ min: 1 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        questions: req.body.questions,
      });
      console.log(newUser);
      const user = newUser.save();
      res.json(user);
    } catch (err) {
      console.log(err);
    }
  }
);

router.post(
  '/storescore',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('score', 'Please try later. Not able to process now').isNumeric(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const { name, score } = req.body;
      const newScore = {
        name,
        score,
      };
      const findUser = await User.findOne({ _id: req.body.id });
      findUser.participants.unshift(newScore);
      await findUser.save();
      res.json(findUser);
    } catch (err) {
      console.log(err);
    }
  }
);

module.exports = router;
