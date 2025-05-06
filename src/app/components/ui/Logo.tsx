import Link from 'next/link';

export const Logo = () => {
  return (
    <Link href="/" className="inline-block cursor-pointer">
      <div className="flex items-center">
        <div className="h-[30px] w-[30px] bg-[url('/images/thinkronize-light.png')] bg-cover bg-center dark:bg-[url('/images/thinkronize-dark.png')]"></div>
        <h1 className="pl-2 text-lg font-bold">Thinkronize</h1>
      </div>
    </Link>
  );
};
