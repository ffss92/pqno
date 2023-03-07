import Link from "next/link";
import React from "react";
import { BsGithub } from "react-icons/bs";

export const Footer: React.FC = () => {
  const links = [
    { href: "/privacidade", title: "Política de Privacidade" },
    { href: "/termos-de-uso", title: "Termos de Uso" },
  ];

  return (
    <footer className="px-4 py-10 bg-stone-300 text-stone-900 flex flex-col gap-1 items-center">
      <Link
        href="https://github.com/ffss92/pqno"
        target="_blank"
      >
        <BsGithub className="w-6 h-6 fill-stone-800" />
      </Link>
      <div className="flex gap-1 text-xs">
        {links.map((link, index) => (
          <React.Fragment key={link.href}>
            <Link
              className="hover:underline font-semibold"
              href={link.href}
            >
              {link.title}
            </Link>
            {index + 1 !== links.length && <span>&#x2022;</span>}
          </React.Fragment>
        ))}
      </div>
      <p className="text-sm text-stone-700">
        {new Date().getFullYear()} &copy; pqno.io. Todos os direitos reservados.
      </p>
    </footer>
  );
};
