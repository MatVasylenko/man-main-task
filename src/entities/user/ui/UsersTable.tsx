import Table from 'src/shared/Table/Table';
import UserApiConnector from 'src/entities/user/api/UserApiConnector';
import { useAppSelector } from 'src/app/store';
import { selectUsers } from '../slices/userSlice';

const UsersTable = () => {
  const users = useAppSelector(selectUsers);

  return (
    <div>
      <UserApiConnector>
        <div>Users</div>
        {users && (
          <Table
            items={users}
          />
        )}
      </UserApiConnector>
    </div>
  )
};

export default UsersTable;
