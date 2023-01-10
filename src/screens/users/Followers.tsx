import { useOutletContext } from 'react-router-dom';

interface IFollowersContext {
  nameOfMyUser: string;
}

const Followers = () => {
  const { nameOfMyUser } = useOutletContext<IFollowersContext>();

  return <h1>Here is {nameOfMyUser}의 followers 입니다.</h1>;
};

export default Followers;
