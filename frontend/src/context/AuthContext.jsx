// import { createContext, useContext, useState, useEffect } from 'react';
// import api from '../api/axios';

// const AuthContext = createContext();

// export function AuthProvider({ children }) {
//   const [user, setUser] = useState(() => {
//     const stored = localStorage.getItem('user');
//     return stored ? JSON.parse(stored) : null;
//   });
//   const [token, setToken] = useState(() => localStorage.getItem('token') || '');

//   useEffect(() => {
//     if (token) {
//       api.defaults.headers.common['Authorization'] = token;
//     } else {
//       delete api.defaults.headers.common['Authorization'];
//     }
//   }, [token]);

//   const login = (userData, tokenData) => {
//     setUser(userData);
//     setToken(tokenData);
//     localStorage.setItem('user', JSON.stringify(userData));
//     localStorage.setItem('token', tokenData);
//     api.defaults.headers.common['Authorization'] = tokenData;
//   };

//   const logout = () => {
//     setUser(null);
//     setToken('');
//     localStorage.removeItem('user');
//     localStorage.removeItem('token');
//     delete api.defaults.headers.common['Authorization'];
//   };

//   return (
//     <AuthContext.Provider value={{ user, token, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export function useAuth() {
//   return useContext(AuthContext);
// }
