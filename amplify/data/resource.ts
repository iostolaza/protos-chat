import { a, defineData, type ClientSchema } from '@aws-amplify/backend';

export const schema = a.schema({
  User: a.model({
    id: a.id(),
    name: a.string(),
    avatar: a.string(),
    conversations: a.hasMany('ConversationUser', 'userId'),
  }).authorization(allow => [allow.owner()]),

  ConversationUser: a.model({
    id: a.id(),
    conversationId: a.id().required(),
    userId: a.id().required(),
    conversation: a.belongsTo('Conversation', 'conversationId'),
    user: a.belongsTo('User', 'userId'),
  }).authorization(allow => [allow.owner()]),

  Conversation: a.model({
    id: a.id(),
    participants: a.hasMany('ConversationUser', 'conversationId'),
    messages: a.hasMany('Message', 'conversationId'),
  }).authorization(allow => [allow.owner()]),

  Message: a.model({
    id: a.id(),
    conversationId: a.id(),
    senderId: a.id(),
    text: a.string(),
    timestamp: a.datetime(),
    read: a.boolean(),
    conversation: a.belongsTo('Conversation', 'conversationId'),
    sender: a.belongsTo('User', 'senderId'),
  }).authorization(allow => [allow.owner()]),
});

export type Schema = ClientSchema<typeof schema>;
export const data = defineData({ schema });