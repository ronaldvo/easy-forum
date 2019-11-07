export interface Post {
    date: Date;
    threadId: string;
    text: string;
    posts?: Post[];
    id?: string;
}

export interface PostId extends Post {
    id: string;
}