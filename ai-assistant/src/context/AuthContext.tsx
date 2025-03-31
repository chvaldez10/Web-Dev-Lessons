import { createContext } from "react";

interface AuthContextType {
  user: {
    name?: string;
    email?: string;
    picture?: string;
    credits?: number;
  } | null;
  setUser: (user: AuthContextType["user"]) => void;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  setUser: () => {},
});
