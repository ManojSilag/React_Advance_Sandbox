import commentReducers from 'Reducers/commentReducers';
import { SAVE_COMMENT } from 'actions/type';

it('handles actions of type SAVE_COMMENT', () => {
    const action = {
        type: SAVE_COMMENT,
        payload: 'NEW Comment'
    }
    const newState = commentReducers([], action);
    expect(newState).toEqual(['NEW Comment'])
});

it('handles action with unknown type', () => {
    const newState = commentReducers([],{})
     expect(newState).toEqual([]);
})