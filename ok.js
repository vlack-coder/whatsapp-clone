const authContext = useContext(AuthContext);

const { startLogin, startLogout, login, logout } = authContext;

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log(user.uid)(login(user.uid));
    // (startSetExpenses()).then(() => {
    renderApp();
    if (history.location.pathname === "/") {
      history.push("/home");
    }
    // });
  } else {
    console.log("yes")(logout());
    renderApp();
    history.push("/");
  }
});