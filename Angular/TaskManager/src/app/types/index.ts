export interface SingleTask {
    id: number;
    title: string;
    status: TaskStatus;
    hidden: boolean;
}

export enum TaskStatus {
    New = 'new',
    InProgress = 'in progress',
    Done = 'done'
}

export interface TaskStatusChange {
    id: number,
    newStatus: TaskStatus;
}

export interface TaskStats {
    opened: number;
    closed: number;
}