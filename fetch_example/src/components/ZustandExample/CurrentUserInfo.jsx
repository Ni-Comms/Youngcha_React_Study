import axios from "axios";
import React from "react";
import create from "zustand";

const useStore = create((set) => ({
  userName: "Jimmy",
  fetchUserName: async (id) => {
    const response = await axios.get(`/api/user-name?id=${id}`);
    set({ userName: response.data.name });
  },
}));

function CurrentUser() {
  const userName = useStore((state) => state.userName);

  return (
    <>
      <div>{userName}</div>
    </>
  );
}

export default function CurrentUserInfo() {
  //const [id, setId] = useStore((state) => [state.id, state.setId]);
  const fetchUserName = useStore((state) => state.fetchUserName);

  // useEffect(() => {
  //   fetchUserName();
  // }, [id]);

  return (
    <>
      <CurrentUser />
      <input onChange={(e) => fetchUserName(e.target.value)} />
    </>
  );
}
