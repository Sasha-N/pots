import { Items } from "../constants/constants";

export const shuffle = (items: Items) => {
    for (let i = items.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [items[i], items[j]] = [items[j], items[i]];
    }

    while (!isSolvable(items)) {
        shuffle(items);
    }

    return items;
}

const isSolvable = (items: Items) => {
    const itemsNumber = items.filter((item) => item !== null) as number[];
    let inversions = 0;

    for (let i = 0; i < itemsNumber.length; i++) {
        for (let j = i + 1; j < itemsNumber.length; j++) {
            if (itemsNumber[i] && itemsNumber[j] && itemsNumber[i] > itemsNumber[j]) {
                inversions++;
            }
        }
    }
    return inversions % 2 === 0;
}

export const generateItems = () => {
    const items: Items = [];

    for (let i = 0; i < 8; i++) {
        items.push(i + 1);
    }

    items.push(null);

    while (!isSolvable(items)) {
        shuffle(items);
    }

    return items;
}
