// export default function( { dispatch} ){
//     return function( next ){
//         return function( action ){
//         }
//     }
// }

export default ({ dispatch }) => (next) => (action) => {
  // Check to see if action has promise on its paylod property
  // If it does has promise
  // If it doesn't has promise
  // next middleware

  // debugger;
  if (!action.payload || !action.payload.then) {
    return next(action);
  }

  //We want to wait for the promise to resolve and then create an new action with that data and dispatch it
  action.payload.then(function(response) {
    //  console.log('dev: response', response)
    const newAction = { ...action, payload: response };
    dispatch(newAction);
  });
};
