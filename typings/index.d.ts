interface Bot {
  _id: string;
  _token: string;
  _serverCount: string | number | null;
  _shardCount: string | number | null;
}

interface Webhook {
    status?: boolean;
    port?: number;
    password?: string;
    endpoint?: string;
}

interface ClientOptions {
    server_count?: string | number;
    shard_count?: string | number;
    interval?: number;
    webhook?: Webhook;
}

export default class Client {
    private _bot: Bot;
    private _interval: NodeJS.Timeout;
    private _timer: number;
    private _isRunning: boolean;
    private _webhook: false;
    private _logs: [];

    public constructor(
        id: string,
        token: string, 
        options: ClientOptions
    );

    private _start(): void;
    public update(
        serverCount: number | string, 
        shardCount: number | string
    ): void;
    private _postStats(): void;
}
