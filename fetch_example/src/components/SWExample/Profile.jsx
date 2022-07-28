import React from "react";
import useSWR from "swr";
import axios from "axios";

const fetcher = (...args) => axios.get(...args).then((res) => res.data);

function useUser(id) {
  const { data, error } = useSWR(`/api/user/${id}`, fetcher, { refreshInterval: 1000 });

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export default function Page() {
  // 데이터 렌더링
  return (
    <>
      <Profile id={123} />
      <Avatar id={123} />
    </>
  );
}

function Profile({ id }) {
  const { user, isLoading, isError } = useUser(id);
  if (isError) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  // 데이터 렌더링
  return <div>hello {user.name}!</div>;
}

export function Avatar({ id }) {
  const { user, isLoading, isError } = useUser(id);
  if (isError) return <div>failed to load (Avatar)</div>;
  if (isLoading) return <div>loading... (Avatar)</div>;

  // 데이터 렌더링
  return <div>hello {user.name}! (Avatar)</div>;
}
