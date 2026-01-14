import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut
} from 'firebase/auth';
import { auth } from '../firebase/client';

const AuthContext = createContext({
  user: null,
  loading: true,
  signIn: async () => {},
  signOut: async () => {}
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const signIn = (email, password) => signInWithEmailAndPassword(auth, email, password);
  const signOut = () => firebaseSignOut(auth);

  const value = useMemo(
    () => ({
      user,
      loading,
      signIn,
      signOut
    }),
    [user, loading]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
