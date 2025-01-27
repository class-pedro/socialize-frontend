export interface DecodedToken {
  Id: string;
  [key: string]: unknown;
}

export interface DecodedTokenUser {
  id: string;
  username: string;
}

export interface AuthContextType {
  user: DecodedTokenUser | null;
  token: string | null;
  setUser: React.Dispatch<React.SetStateAction<DecodedTokenUser | null>>;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
  handleLogout: () => void;
}
