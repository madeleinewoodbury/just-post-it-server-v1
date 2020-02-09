// @desc    Get all users
// @route   GET /api/v1/users
// @access  Public
exports.getUsers = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Show all users' });
};

// @desc    Get single user
// @route   GET /api/v1/users/:id
// @access  Public
exports.getUser = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Show single user' });
};

// @desc    Create new user
// @route   POST /api/v1/users
// @access  Private
exports.createUser = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Create user' });
};

// @desc    Update user
// @route   PUT /api/v1/users/:id
// @access  Public
exports.updateUser = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Update user' });
};

// @desc    Delete user
// @route   DELETE /api/v1/users/:id
// @access  Public
exports.deleteUser = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Delete user' });
};
