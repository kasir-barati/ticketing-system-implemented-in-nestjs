import { Schema, Document, model } from 'mongoose';

const COLLECTION_NAME = 'messages';

interface IMessage {
    userId: string;
    content: string;
    ticketId: string;
    messageId: string;
}

class Message implements IMessage {
    private _userId: string;
    private _content: string;
    private _ticketId: string;
    private _messageId: string;

    static fields = {
        _userId: 'userId',
        _content: 'content',
        _ticketId: 'ticketId',
        _messageId: 'messageId',
    };

    constructor(data: IMessage) {
        this._userId = data.userId;
        this._content = data.content;
        this._ticketId = data.ticketId;
        this._messageId = data.messageId;
    }

    public set userId(v: string) {
        this._userId = v;
    }

    public get userId(): string {
        return this._userId;
    }

    public set content(v: string) {
        this._content = v;
    }

    public get content(): string {
        return this._content;
    }

    public set ticketId(v: string) {
        this._ticketId = v;
    }

    public get ticketId(): string {
        return this._ticketId;
    }

    public set messageId(v: string) {
        this._messageId = v;
    }

    public get messageId(): string {
        return this._messageId;
    }
}

const userSchema = new Schema(
    {
        [Message.fields._userId]: String,
        [Message.fields._content]: String,
        [Message.fields._ticketId]: String,
        [Message.fields._messageId]: String,
    },
    {
        timestamps: true,
        collection: COLLECTION_NAME,
    },
);

interface MessageDocument extends Message, Document {}

const MessageModel = model<MessageDocument>(COLLECTION_NAME, userSchema);

export { MessageModel, MessageDocument, Message };
