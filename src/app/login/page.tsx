import Image from 'next/image';
import { Login } from './login';

const Page = (): React.ReactElement => {
  return (
    <div className="h-full">
      <div className="flex h-full items-center">
        <div className="hidden lg:flex w-1/2 h-screen relative flex-col items-center border-r border-light">
          <Image fill src='/images/cover.jpg' alt='cover-image' />
        </div>
        <Login />
      </div>
    </div>
  );
};

export default Page;