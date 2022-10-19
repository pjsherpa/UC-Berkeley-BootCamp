const router = require('express').Router();
const {
  getTags,
  getSingleTag,
  createTag,
} = require('../../controllers/tagController');

// /api/users
router.route('/').get(getTags).post(createTag);

// /api/users/:tagId
router.route('/:tagId').get(getSingleTag);

module.exports = router;
