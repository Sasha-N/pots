export const CORRECT = [1, 2, 3, 4, 5, 6, 7, 8, null];

export interface squareProps {
    value: number | null;
    onClick: () => void;
}

export interface buttonProps {
    onClick: () => void;
}

type ActionsType = ('MOVE' | 'SHUFFLE');

export interface GameActions {
    type: ActionsType;
    payload?: number;
}

export type Items = (number | null)[];
export interface GameState {
    items: Items;
    completed: boolean;
    action?: GameActions;
}