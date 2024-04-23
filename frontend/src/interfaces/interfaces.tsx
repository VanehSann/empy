export interface Assistant {
    _id?: string;
    name: string;
    email: string;
    phone: string;
}

export interface ClientAssistant {
    clientId: string;
    assistantId?: string;
}

export interface Client {
    _id?: string;
    name: string;
    code: string;
    network: string;
    assistant?: string;
}

export interface AssistantWithId {
    _id: string;
    name: string;
    email: string;
    phone: string;
}

export interface ClientWithId {
    _id: string;
    name: string;
    code: string;
    network: string;
    assistant?: string;
}
