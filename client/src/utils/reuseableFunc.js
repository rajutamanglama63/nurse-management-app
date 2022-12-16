export const navigatorFunc = (destiny) => {
  window.location = destiny;
};

export const setDataInLocalStorage = (name, data) => {
  window.localStorage.setItem(name, data);
};

export const getCurrentUser = () => {
  let user = null;
  if (window.localStorage.getItem("loggedInUser")) {
    const data = JSON.parse(
      window.localStorage.getItem("loggedInUser")
    ).fullname;
    if (data) user = data;
    return user;
  } else {
    return null;
  }
};

export const removeCurrentUser = () => {
  if (window.localStorage.getItem("loggedInUser")) {
    window.localStorage.removeItem("loggedInUser");
  }
};
