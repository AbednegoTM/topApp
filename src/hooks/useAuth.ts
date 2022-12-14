import { useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";

const useAuth = () => {
  const user = useSelector<RootState>((state) => state.auth.id);
  return useMemo(() => ({ user }), [user]);
};

export default useAuth;
