import { a, defineData, type ClientSchema } from '@aws-amplify/backend';

export const schema = a.schema({
  User: a.model({
    id: a.id(),
    name: a.string(),
    avatar: a.string(),
  }).authorization(allow => [allow.owner()]),

  Conversation: a.model({
    id: a.id(),
    participants: a.hasMany('User'),
    messages: a.hasMany('Message'),
  }).authorization(allow => [allow.owner()]),

  Message: a.model({
    id: a.id(),
    conversationId: a.id(),
    senderId: a.id(),
    text: a.string(),
    timestamp: a.datetime(),
    read: a.boolean(),
  }).authorization(allow => [allow.owner()]),
});

export type Schema = ClientSchema<typeof schema>;
export const data = defineData({ schema });