const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let messageSchema = new Schema({
    fromName: {
        type: String,        
    },
    subject: {
        type: String,        
    },
    date_message: {
        type: String,        
    }      
});

messageSchema.virtual('messageId').get(function () {
    return this.name._id;
  });

module.exports = mongoose.model('Message', messageSchema, 'messages')