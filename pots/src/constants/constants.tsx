export interface squareProps {
    value: number | null;
}

type ActionsType = ('MOVE' | 'SHUFFLE');

export interface GameActions {
    type: ActionsType;
    payload?: number;
}

export interface GameState {
    items: (number | null)[];
    completed: boolean;
    action?: GameActions;
}