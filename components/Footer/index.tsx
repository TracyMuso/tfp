import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex justify-center px-8 py-12">
      <p className="text-pink-50 text-center">
        Built by yours truly with{" "}
        <Link className="text-[#f78ca2]" href={"https://nextjs.org"}>
          Nextjs
        </Link>
        . Deployed on{" "}
        <Link className="text-[#f78ca2]" href={"https://vercel.com"}>
          Vercel
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
