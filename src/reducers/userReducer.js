function userReducer(state = "", action) {
  switch (action.type) {
    case "updateUser":
      return action.payload;
  }
  return state;
}

export default userReducer;
