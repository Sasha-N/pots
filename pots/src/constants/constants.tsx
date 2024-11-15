export const CORRECT = [1, 2, 3, 4, 5, 6, 7, 8, null];

export interface squareProps {
    value: number | null;
    onClick: () => void;
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