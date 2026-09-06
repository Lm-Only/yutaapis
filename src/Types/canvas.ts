export interface CardLevelUpOpts {
    fundo: string;
    nome: string;
    logo: string;
    level: string;
    oldlevel: string;
    xp: string;
    nextxp: string;
}

export interface SaiuOpts {
    fundo: string;
    text: string;
    logo: string;
}

export interface ShipOpts {
    avatar1: string;
    avatar2: string;
    porcentagem: string | number;
    fundo: string;
}

export interface QcOpts {
    avatar: string;
    nick: string;
    message: string;
}

export interface PingOpts {
    fundo: string;
    logo: string;
    uptime: string | number;
    memoria: string | number;
    latencia: string | number;
    status: string;
    velocidade: string | number;
}

export interface CardPerfilOpts {
    fundo: string;
    logo: string;
    nome: string;
    subnome: string;
    custom_status: string;
}

export interface GoodbyeOpts {
    fundo: string;
    perfil: string;
    legenda: string;
    titulo: string;
}