import { useState, useEffect, useRef } from "react";
import { getUserData } from "./api/getUsersAPI";
import UserList from "./userList/UserList";
import s from "./App.module.css";

export const App = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const pageHasChangedRef = useRef(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (pageHasChangedRef.current) {
      getUserData(page)
        .then((newUsers) => setUsers((users) => [...users, ...newUsers]))
        .then(setIsLoading(false));
      return;
    }
    pageHasChangedRef.current = true;
  }, [page]);

  const handleScroll = () => {
    let isAtBottom =
      document.documentElement.scrollHeight -
        document.documentElement.scrollTop <=
      document.documentElement.clientHeight;
    if (isAtBottom) {
      setPage((page) => page + 1);
      setIsLoading(true);
    }
  };

  return (
    <section className={s.container}>
      <UserList users={users} />
      {isLoading && <p className={s.loading}>Loading...</p>}
    </section>
  );
};
