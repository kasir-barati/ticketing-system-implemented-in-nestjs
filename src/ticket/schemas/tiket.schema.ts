import { Schema, Document, model } from 'mongoose';

// import { ETicketStates } from '../seeders/ticket-states';
// import { ETicketDepartements } from '../seeders/ticket-departement';
// import { ETicketPriorityLevels } from '../seeders/ticket-priorities';
import { ticketStates } from '../seeders/ticket-states';
import { ticketDepartements } from '../seeders/ticket-departement';
import { ticketPriorityLevels } from '../seeders/ticket-priorities';

const COLLECTION_NAME = 'tickets';

interface ITicket {
    title: string;
    state: string;
    departemant: string;
    priorityLevel: string;
    adminId: string;
    contractorId: string;
}

class Ticket implements ITicket {
    private _title: string;
    private _state: string;
    private _departemant: string;
    private _priorityLevel: string;
    private _adminId: string;
    private _contractorId: string;

    static fields = {
        _title: 'title',
        _state: 'state',
        _departemant: 'departemant',
        _priorityLevel: 'priorityLevel',
        _adminId: 'adminId',
        _contractorId: 'contractorId',
    };

    constructor(data: ITicket) {
        this._title = data.title;
        this._state = data.state;
        this._departemant = data.departemant;
        this._priorityLevel = data.priorityLevel;
    }

    public set title(v: string) {
        this._title = v;
    }

    public get title(): string {
        return this._title;
    }

    public set state(v: string) {
        this._state = v;
    }

    public get state(): string {
        return this._state;
    }

    public set departemant(v: string) {
        this._departemant = v;
    }

    public get departemant(): string {
        return this._departemant;
    }

    public set priorityLevel(v: string) {
        this._priorityLevel = v;
    }

    public get priorityLevel(): string {
        return this._priorityLevel;
    }

    public set adminId(v: string) {
        this._adminId = v;
    }

    public get adminId(): string {
        return this._adminId;
    }

    public set contractorId(v: string) {
        this._contractorId = v;
    }

    public get contractorId(): string {
        return this._contractorId;
    }
}

const userSchema = new Schema(
    {
        [Ticket.fields._title]: String,
        [Ticket.fields._state]: {
            type: String,
            enum: Object.values(ticketStates),
            default: ticketStates.waiting,
        },
        [Ticket.fields._departemant]: {
            type: String,
            enum: Object.values(ticketDepartements),
            default: ticketDepartements.support,
        },
        [Ticket.fields._priorityLevel]: {
            type: String,
            enum: Object.values(ticketPriorityLevels),
            default: ticketPriorityLevels.normal,
        },
        [Ticket.fields._adminId]: String,
        [Ticket.fields._contractorId]: String,
    },
    {
        timestamps: true,
        collection: COLLECTION_NAME,
    },
);

interface TicketDocument extends Ticket, Document {}

const TicketModel = model<TicketDocument>(COLLECTION_NAME, userSchema);

export { TicketModel, TicketDocument, Ticket };
