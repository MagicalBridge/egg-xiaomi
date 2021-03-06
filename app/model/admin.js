'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const d = new Date();

  const AdminSchema = new Schema({
    username: { type: String },
    password: { type: String },
    mobile: { type: String },
    email: { type: String },

    status: { type: Number, default: 1 },
    role_id: { type: Schema.Types.ObjectId },
    add_time: { // 添加的时间
      type: Number,
      default: d.getTime(),
    },
    is_super: { type: Number }, // 是否是超级管理员
  });

  return mongoose.model('Admin', AdminSchema, 'admin');
};

