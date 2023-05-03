import store from "../../store/store";
import { setMessages } from "../../store/actions/chatAction";

export const updateDirectChatHistoryIfActive = (data) => {
  const { participants, messages } = data;
  const receiverId = store.getState().chat.chosenChatDetails?.id;
  const userId = store.getState().auth.userDetails._id;
  if (receiverId && userId) {
    const usersInConversation = [receiverId, userId];
    updateDirectChatHistoryIfSameConversationActive({
      participants,
      usersInConversation,
      messages,
    });
  }
};

const updateDirectChatHistoryIfSameConversationActive = ({
  participants,
  usersInConversation,
  messages,
}) => {
  const result = participants.every((participantId) => {
    return usersInConversation.includes(participantId);
  });
  if (result) {
    store.dispatch(setMessages(messages));
  }
};
