const Message = require('../models/message');

exports.getAllMessages = (req, res) => {
    Message.find((err, messages)  => {
        res.json(messages)
    });
}

exports.getMessage = (req, res) => {
    Message.findOne({'_id': req.params.messageId}, (err, message)  => {
        res.json(message)
    });
}

exports.addMessage = (req, res) => {
   
    let message = new Message(req.body);
    message.date_message = new Date().toString()
    
    message.save()
    .then(messag => {
        res.status(200).json({'message': 'added succesfully'});
    })
    .catch(err => {
        console.log(err)
        res.status(500).send('Fail to add new record');
    });
}
    
exports.removeMessage = (req, res) => {

    Message.deleteOne({_id: req.params.messageId}, (err)  => {
        if(err != null){
            console.log(err)
            res.status(500).send('Fail to remove record');
        }else {
            res.status(200).json({'message': 'remove succesfully'});
        }        
    });
}

exports.editMessage = (req, res) => {
    let message = new Message(req.body);
    Message.updateOne({_id: req.params.messageId}, message, (err)  => {
        if(err != null){
            console.log(err)
            res.status(500).send('Fail to edit record');
        }else {
            res.status(200).json({'message': 'edited succesfully'});
        }        
    });
}
