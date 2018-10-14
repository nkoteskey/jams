import Auth from './services/authorizeConnect.service'
const Authorize = {}

/*
 * Action Type Constants
 */

export const ActionType = {
  AUTH_SUCCESS: 'AUTH_SUCCESS',
  AUTH_HANDLE: 'AUTH_HANDLE'
}

/*
 * Action Creators
 */

Authorize.authSuccess = bool => {
  return {
    type: Action,
    authSuccess: bool
  }
}

Authorize.authHandle = handle => {
  return {
    type: ActionType.AUTH_HANDLE,
    handle
  }
}

/*
 * Dispatch Methods
 */

Authorize.authorizeUser = () => {
  return async dispatch => {
    try {
      const auth = new Auth()
      const handle = await auth.appHandle()
      dispatch(Authorize.authHandle(handle))
      dispatch(Authorize.authSuccess(true))
    } catch (e) {
      dispatch(Authorize.authSuccess(false))
      console.log('Something is jammed. There has been a problem authorizing this app: ', e.message);
    }
  }
}

export default Authorize
