export function reducer(prevState, action) {
  switch (action.type) {
    case "fetch/data":
      return {
        ...prevState,
        loading: false,
        data: action.data,
      };
    case "fetch/error":
      return {
        ...prevState,
        loading: false,
        error: action.data,
      };
    case "user/remove":
      return {
        ...prevState,
        data: prevState.data.filter((user) => user.id !== action.data.id),
      };
    case "user/add":
      return {
        ...prevState,
        data: [...prevState.data, action.data],
      };
    default:
      return prevState;
  }
}
