export interface SingleTask {
    id: number;
    title: string;
    status: TaskStatus;
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