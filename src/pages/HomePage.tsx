import CoreTitle from 'src/entities/core/ui/CoreTitle';
import UsersTable from 'src/entities/user/ui/UsersTable';

const HomePage = () => {
  return (
    <div>
      <CoreTitle />
      <UsersTable />
    </div>
  )
};

export default HomePage;