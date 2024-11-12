import { GameState, GameActions, CORRECT } from "../constants/constants";

const GameReducer = (state: GameState, action: GameActions) => {
    switch (action.type) {
        case 'MOVE': {
                const newItems = [...state.items];
                const position = action.payload;

                if (position === undefined) return state;

                const column = position % 3;
                
                const moves = [
                    {condition: position < 6, offset: 3},
                    {condition: position > 2, offset: -3},
                    {condition: column < 2, offset: 1},
                    {condition: column > 0, offset: -1},
                ];

                moves.forEach(({condition, offset}) => {
                    if (condition) {
                        const target = position + offset;
                        if (newItems[target] === null) {
                            [newItems[position], newItems[target]] = [newItems[target], newItems[position]];
                        }
                    }
                });

                const isCompleted = newItems.every((value, index) => value === CORRECT[index]);

                return {
                    ...state,
                    items: newItems,
                    completed: isCompleted,
                };
            };
        default:
            return state;
    }

}

export default GameReducer;