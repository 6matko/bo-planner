export class BaseEntity {
    id: number;
    created: Date;
    updated: Date;
}

export class ChromeCommunicationMessage<T = any> {
    type: string;
    data: T;
}

export class Currency {
    code: string;
    currencyId: number;
    symbol: string;
}