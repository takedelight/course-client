import Link from "next/link";

export const Header = () => {
  return (
    <header className="py-3">
      <nav className="container text-lg mx-auto px-1 flex justify-between">
        <Link className="font-semibold" href="/">
          Logo
        </Link>

        <ul className="flex gap-3 items-center">
          <li className="ease-in-out duration-150 transition-colors hover:text-primary font-semibold">
            <Link href="/tests">Тести</Link>
          </li>
          <li className="ease-in-out duration-150 transition-colors hover:text-primary font-semibold">
            <Link href="/profile">Профіль</Link>
          </li>
        </ul>

        <div>
          <Link
            className="px-3 py-1 rounded-sm text-white  bg-primary"
            href="/login"
          >
            Вхід
          </Link>
        </div>
      </nav>
    </header>
  );
};
