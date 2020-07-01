const ADD_ITEM = 'historyItems/ADD_ITEM';
const TOGGLE_STAR= 'historyItems/TOGGLE_STAR';
const DELETE_ITEM = 'historyItems/DELETE_ITEM';

let nextId = 1;
export const addItem = text => ({
    type: ADD_ITEM,
    item: {
        id: nextId ++,
        text,
        starred: false,
    }
});
export const toggleStar = id => {
    return {
        type: TOGGLE_STAR,
        id
    };
};
export const deleteItem = id => ({
    type: DELETE_ITEM,
    id
});

const initialState = [
    /* 
    {
        id: 1,
        text: '안녕하세요',
        starred: false
    }
    */
];

export default function history(state = initialState, action) {
    switch (action.type) {
        case ADD_ITEM:
            return state.concat(action.item);
        case TOGGLE_STAR:
            return state.map(item => item.id === action.id
                ? {...item, starred: !item.starred}
                : item
                );
        case DELETE_ITEM:
            return state.filter(item => item.id !== action.id);
        default:
            return state;
    }
}