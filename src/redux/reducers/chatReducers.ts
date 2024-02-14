import {
  ChatActionTypes,
  START_LOADING,
  END_LOADING,
  GET_ALL_CONVERSATIONS,
  SELECT_CONVERSATION,
  SENT_MESSAGE,
} from "../actions/chatActions";

export interface ChatMessage {
  messageId: string;
  senderName: string;
  message_text: string;
  date: string;
}

export interface ConversationState {
  conversationId: string;
  isGroup: boolean;
  conversationName: string;
  latestMessage?: string;
  groupAdmin?: string;
  createdAt: string;
}

export interface ConversationMember {
  userName: string;
  emailId: string;
  avatar?: string;
}
export interface ChatStateConversation extends ConversationState {
  Messages?: ChatMessage[];
  ConversationMembers: ConversationMember[];
}

export interface ChatState {
  conversations: ChatStateConversation[];
  chatLoading: boolean;
  selectedChat: ChatStateConversation | null;
  sentMessageLoading: boolean;
}

export const initialChatState: ChatState = {
  conversations: [],
  chatLoading: false,
  selectedChat: null,
  sentMessageLoading: false,
};

export const chatReducer = (
  state = initialChatState,
  action: ChatActionTypes
): ChatState => {
  if (action.type === START_LOADING) {
    return {
      ...state,
      chatLoading: true,
    };
  } else if (action.type === END_LOADING) {
    return {
      ...state,
      chatLoading: false,
    };
  } else if (action.type === GET_ALL_CONVERSATIONS) {
    const conversations: ChatStateConversation[] = (
      action.payload.conversations as ChatStateConversation[]
    ).map((element) => {
      const conversation: ChatStateConversation = {
        conversationId: element?.conversationId,
        isGroup: element.isGroup,
        conversationName: element.isGroup
          ? element.conversationName
          : element?.ConversationMembers?.filter(
              (e) => action.payload.userState.user?.email !== e.emailId
            )[0].userName || "Default user",
        latestMessage: element.latestMessage,
        groupAdmin: element.groupAdmin,
        createdAt: element.createdAt,
        Messages: element.Messages,
        ConversationMembers: element.ConversationMembers.map((e) => {
          const member: ConversationMember = {
            userName: e.userName,
            emailId: e.emailId,
          };
          return member;
        }),
      };
      return conversation;
    });
    return { ...state, conversations };
  } else if (action.type === SELECT_CONVERSATION) {
    const conversation = state.conversations.find(
      (e) => e.conversationId === action.payload.conversationId
    );
    if (!conversation) return state;
    return { ...state, selectedChat: conversation };
  } else if (action.type === SENT_MESSAGE) {
    return {
      ...state,
      selectedChat: state.selectedChat
        ? {
            ...state.selectedChat,
            Messages: state.selectedChat.Messages
              ? [...state.selectedChat.Messages, action.payload.message]
              : undefined,
          }
        : null,
      conversations: [
        ...state.conversations.map((conversation) => {
          if (conversation.conversationId === action.payload.conversationId) {
            if (conversation.Messages) {
              conversation.Messages.push(action.payload.message);
            }
          }
          return conversation;
        }),
      ],
    };
  } else return state;
};
