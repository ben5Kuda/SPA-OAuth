export class Message {
    // id: number;
    // msg: string;
    // userId: number;
    // timestamp: Date;
    // audience: MessageAudience;
    senderId: number;
    recieverId: number;
    message: string;
}

export enum MessageAudience {
    directMessage,
    broadcast,
    channel,
    self
}
