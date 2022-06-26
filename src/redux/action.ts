export const MENU = 'MENU_ACTION';

export const menu = (payload: boolean) => {
    return {type: MENU, payload}
};