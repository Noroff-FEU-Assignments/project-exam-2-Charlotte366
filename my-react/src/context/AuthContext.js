import React from "react";
import LocalStorage from "../hooks/LocalStorage";

const AuthContext = React.createContext([null, () => {}]);

export const AuthProvider = (props) => {
	const [auth, setAuth] = LocalStorage("auth", null);
	return <AuthContext.Provider value={[auth, setAuth]}>{props.children}</AuthContext.Provider>;
};

export default AuthContext;