import React, { useEffect, useState } from "react";
import { UserData, useUsersQuery } from "../../app/services/users";
import NavBar from "../../components/navigation/NavBar";
import Pagination from "../../components/navigation/Pagination";
import UserCard from "./UserCard";

type Props = {};

const UsersGrid = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { data: users, isSuccess, isLoading } = useUsersQuery(currentPage);

  useEffect(() => {
    console.log(users);
  }, [users]);

  return (
    <div className="">
      <NavBar />
      {isLoading && <p>Loading...</p>}
      {isSuccess && (
        <div>
          <div className="row p-2">
            {users.data.map((user: UserData) => (
              <UserCard key={user.id} user={user} />
            ))}
          </div>
          <Pagination
            currentPage={currentPage}
            numberOfPages={users.total_pages}
            setCurrentPage={(page) => {
              setCurrentPage(page);
            }}
          />
        </div>
      )}
    </div>
  );
};

export default UsersGrid;
