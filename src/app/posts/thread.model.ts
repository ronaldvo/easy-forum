export interface Thread {
    title: string;
    text: string;
    date: Date;
}

export interface ThreadId extends Thread { id: string; }
