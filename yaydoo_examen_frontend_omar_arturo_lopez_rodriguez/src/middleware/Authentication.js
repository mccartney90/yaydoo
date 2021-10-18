// LOGIN

export const loginSession = (isLogin, userType) => {
   sessionStorage.setItem("isLogged", isLogin);
   localStorage.setItem("isLogged", isLogin);
   sessionStorage.setItem("userRole", userType);
   // localStorage.setItem("token", jwt);
};

// LOGOUT
export const logout = () => {
   sessionStorage.clear();
   localStorage.clear();
};

// LOGIN STATUS
export const isLogin = () => {
   if (localStorage.getItem("isLogged")) return true;
   // logout();
   return false;
};
