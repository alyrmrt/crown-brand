import { UserActionTypes} from './types.js'


export const setCurrentUser = user => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user
})
