export type User = {
    id: string,
    id_bin: BinaryData,
    name: string,
    email: string,
    password: string,
    id_text: string,
    id_utente: number,
};

export type Mappa = {
    id: number,
    nome: string,
    desc_completa: string,
    desc_ridotta: string,
    top_left_lat: number,
    top_left_lon: number,
    bottom_right_lat: number,
    bottom_right_lon: number,
    id_mappa_padre: number,
    show_codice: number,
};