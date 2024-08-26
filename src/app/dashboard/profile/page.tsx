import Image from 'next/image';
import { getSession } from '@auth0/nextjs-auth0';



const Profile = async () => {
  const session = await getSession();
  const user = session?.user



  return (
    <>
      {user && (
        <div className=''>
          <h2>{user?.name}</h2>
          <img src={user?.picture} alt={user?.name}
            width={200}
            height={200} />
          <p>{user?.email}</p>
          <div>{JSON.stringify(session)}</div>
        </div>
      )}
    </>
  );
};

export default Profile;
