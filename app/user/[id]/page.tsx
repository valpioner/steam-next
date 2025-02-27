import { FC } from 'react';

interface UserPageProps {
  params: { id: string };
}

const UserPage: FC<UserPageProps> = ({ params }) => {
  const { id } = params;

  return <div>User id: {id}</div>;
};

export default UserPage;
