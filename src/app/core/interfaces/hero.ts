export interface Hero {
    appearance: {};
    biography: {};
    connections: {};
    id: string;
    image: {};
    name: string;
    powerstats: {
        combat: string;
    };
    work: {};
}

export interface FightData {
    fightDate: Date,
    heroName: string; 
    heroId: string; 
    opponentName: string;
    opponentId: string;
    result: any;

}

export interface Power {
    title: string;
    param: string;
    quantity: number;
    stats: number;   
}