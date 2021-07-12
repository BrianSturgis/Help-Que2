// eslint-disable-next-line import/no-anonymous-default-export
import * as c from './../actions/ActionTypes';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = {}, action) => {
  const { names, location, issue, id, formattedWaitTime, timeOpen } = action;
  switch (action.type) {
  case c.ADD_TICKET:
    return Object.assign({}, state, {
      [id]: {
        names: names,
        location: location,
        issue: issue,
        id: id,
        timeOpen: timeOpen,
        formattedWaitTime: formattedWaitTime
      }
    });
	case c.DELETE_TICKET:
    let newState = { ...state };
    delete newState[id];
    return newState;

  case c.UPDATE_TIME:
    const newTicket = Object.assign({}, state[id], {formattedWaitTime});
    const updatedState = Object.assign({}, state, {
      [id]: newTicket
    });
    return updatedState;
    default:
    return state;
  

  }


}; 
