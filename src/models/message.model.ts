import mongoose, { Document, Schema } from 'mongoose';

interface IMessage {
  username: string;
  message: string;
}

interface IMessageDocument extends IMessage, Document {}

const messageSchema = new Schema({
  username: { type: String, required: true },
  message: { type: String, required: true },
});

const Message = mongoose.model<IMessageDocument>('Message', messageSchema);

export default Message;
