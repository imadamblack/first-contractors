import Link from 'next/link';
import { info } from '../../../info';
import Image from 'next/image';
import logo from '../../../public/logo.png';

export default function Header() {
  return (

    <header
      className={`sticky top-0 bg-brand-1 backdrop-blur-lg w-screen shadow-lg h-[8rem] flex justify-center z-[99] hover:top-0`}
    >
      <div className="flex z-[1]">
        <div className="relative flex items-center justify-center h-[12rem] w-[12rem]">
          <Link href="/" passhref>
            <Image src={logo} alt={info.companyName} layout="fill" objectFit="contain" className="z-10"/>
          </Link>
          <div className="absolute rounded-full h-[16rem] w-[16rem] bg-brand-1 shadow-lg"/>
        </div>
      </div>
    </header>

  );
}
