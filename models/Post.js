const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a title'],
    trim: true,
    maxlength: [50, 'Title can not be more than 50 characters']
  },
  text: {
    type: String,
    required: [true, 'Please add a text']
  },
  category: {
    type: String,
    required: true,
    enum: [
      'Science & Technology',
      'Food',
      'Politics',
      'Entertainment',
      'Business',
      'Travel',
      'History',
      'Nature & Wildlife',
      'Family',
      'Fiction',
      'Personal Development',
      'Health & Wellness',
      'Other'
    ]
  },
  photo: {
    type: String,
    default: 'no-photo.jpg'
  },
  // likes: [
  //   {
  //     user: {
  //       type: Schema.Types.ObjectId,
  //       ref: 'users'
  //     }
  //   }
  // ],
  // comments: [
  //   {
  //     user: {
  //       type: Schema.Types.ObjectId,
  //       ref: 'users'
  //     },
  //     text: {
  //       type: String,
  //       required: true
  //     },
  //     name: {
  //       type: String
  //     },
  //     avatar: {
  //       type: String
  //     },
  //     date: {
  //       type: Date,
  //       default: Date.now
  //     }
  //   }
  // ],
  author: {
    type: String
  },
  avatar: {
    type: String,
    default: 'no-avatar.jpg'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
  // user: {
  //   type: mongoose.Schema.ObjectId,
  //   ref: 'User',
  //   required: true
  // }
});

module.exports = mongoose.model('Post', PostSchema);
