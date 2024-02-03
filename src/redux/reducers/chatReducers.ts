import {
  ChatActionTypes,
  START_LOADING,
  END_LOADING,
} from "../actions/chatActions";

export interface ChatMessage {
  messageId: string;
  conversationId: string;
  senderId: string;
  message_text: string;
  date: string;
}

export interface ConversationState {
  conversationId: number;
  isGroup: boolean;
  conversationName?: string;
  latestMessage?: string;
  groupAdmin?: string;
  createdAt: string;
}
export interface ChatStateConversation extends ConversationState {
  messages?: ChatMessage[];
}

export interface ChatState {
  conversations: ConversationState[];
  chatLoading: boolean;
  selectedChat: ChatStateConversation | null;
}

export const initialChatState: ChatState = {
  conversations: [],
  chatLoading: false,
  selectedChat: null,
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
  } else return state;
};
