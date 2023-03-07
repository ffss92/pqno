import Link from "next/link";

export const Nav: React.FC = () => {
  return (
    <nav className="flex px-4 md:px-6 py-4 items-center justify-between">
      <div>
        <Link
          href="/"
          className="text-xl font-light"
        >
          pqno
        </Link>
      </div>
      {/* <div>
        <button className="px-4 py-2 bg-yellow-200 text-yellow-900 font-semibold text-sm rounded-md shadow">
          Entrar
        </button>
      </div> */}
    </nav>
  );
};
