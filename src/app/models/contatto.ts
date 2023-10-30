export interface Contatto {
    id: number;
    tipologia: string;
    nome: string;
    cognome: string;
    ragioneSociale: string;
    indirizzo: Indirizzo;
    email: string;
    numeroTelefono: string;
    dataNascita: string;
}

export interface Indirizzo {
    via: string;
    citta: string;
    provincia: string;
    cap: string;
    nazione: string;
}