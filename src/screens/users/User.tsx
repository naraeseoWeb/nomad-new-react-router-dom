import { Link, Outlet, useParams } from 'react-router-dom';
import { users } from '../../db';

const User = () => {
  const { userId } = useParams();
  console.log('userId :', userId);

  return (
    <div>
      <h1>
        User with id '{userId}' is named: {users[Number(userId) - 1].name}
      </h1>
      <hr />
      <Link to='followers'>See followers</Link>
      <Outlet />
    </div>
  );
};

export default User;
