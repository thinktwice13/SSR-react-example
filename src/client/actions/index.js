//custom axios instance only works for /api request

export const FETCH_USERS = "fetch_users"
export const fetchUsers = () => async (dispatch, getState, api) => {
  dispatch({
    type: FETCH_USERS,
    payload: (await api.get("/users")).data
  })
}

export const FETCH_CURRENT_USER = "fetch_current_user"
export const fetchCurrentUser = () => async (dispatch, getState, api) => {
  dispatch({
    type: FETCH_CURRENT_USER,
    payload: (await api.get("/current_user")).data
  })
}
