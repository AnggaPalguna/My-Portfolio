import Link from "next/link"

const NavLink = ({href,title}) => {
    return (
        <Link href={href}
            className="text-slate-600 hover:text-black dark:text-[#ADB7BE] py-2 px-3  sm:text-xl rounded dark:hover:text-white">
            {title}
            </Link>
    );
};

export default NavLink;