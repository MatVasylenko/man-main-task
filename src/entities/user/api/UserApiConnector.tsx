import React, { FC, useEffect } from 'react';
import { useGetUsersQuery } from './userApi';
import { useAppDispatch } from 'src/app/store';
import { setUsers } from 'src/entities/user/slices/userSlice';
import { IUser } from 'src/entities/user/model';

interface IUserApiConnectorProps {
  children: React.ReactNode;
}

const UserApiConnector:FC<IUserApiConnectorProps> = ({
  children,
}) => {
  const dispatch = useAppDispatch();
  const { data: users } = useGetUsersQuery({});
  // Also we can use users data instead slice data because RTK Query give this opportunity

  // We can use another method for generation userData
  // const anotherDataUsers: IUser[] = [
  //   {
  //     id: 1,
  //     name: 'FakeName',
  //     phone: '+359002333222',
  //     website: 'site.com.ua'
  //   },
  // ];

  useEffect(() => {
    if (users) {
      // Some transforming
      const transformDataUsers = users.map((user) => ({
        id: user.id,
        name: user.name,
        website: user.website + " EN Site",
        phone: user.phone,
      }))
      // Can give anotherDataUsers or something else
      dispatch(setUsers(transformDataUsers));
    }
  }, [users, dispatch]);

  return (
    <>
      {children}
    </>
  );
};

export default UserApiConnector;