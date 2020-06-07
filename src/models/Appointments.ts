import { da } from 'date-fns/locale';
import { uuid } from 'uuidv4';

interface AppointmentCTO {
    provider: string;
    date: Date;
}

class Appointment {
    id: string;

    provider: string;

    date: Date;

    constructor({ provider, date }: AppointmentCTO) {
        this.id = uuid();
        this.provider = provider;
        this.date = date;
    }
}

export default Appointment;
