import Link from "next/link"

const NavLink = ({href,title}) => {
    return (
        <Link href={href}
            className="py-2 px-3 text-[#ADB7BE] sm:text-xl rounded hover:text-white">
            {title}
            </Link>
    );
};

export default NavLink;