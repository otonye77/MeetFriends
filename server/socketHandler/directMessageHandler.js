const Conversation = require("../models/conversation");
const Message = require("../models/message");

const directMessageHandler = async (socket, data) => {
  try {
    const { userId } = socket.user;
    const { receiverUserId, content } = data;
    const message = await Message.create({
      content: content,
      authorId: userId,
      date: new Date(),
      type: "DIRECT",
    });
    //FIND IF CONVERSATION EXIST BETWEEN THIS TWO USERS IF NOT CREATE NEW
    const conversation = await Conversation.findOne({
      participants: {
        $all: [userId, receiverUserId],
      },
    });
    if (conversation) {
      conversation.messages.push(message._id);
      await conversation.save()
    } else {
      const newConversation = await Conversation.create({
        messages: [message._id],
        participants: [userId, receiverUserId]
      })
    }
  } catch (err) {
    console.log(err);
  }
};
