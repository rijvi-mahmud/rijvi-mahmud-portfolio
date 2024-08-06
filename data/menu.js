import { HomeIcon as HomeIconOutlined } from "@heroicons/react/24/outline"
import { HomeIcon as HomeIconSolid } from "@heroicons/react/24/solid"
import { HiUser, HiOutlineUser } from "react-icons/hi2";
import { SiDatabricks } from "react-icons/si";
import { TbBrandDatabricks } from "react-icons/tb";
import { MdArticle, MdOutlineArticle } from "react-icons/md";
import { TbBulb, TbBulbFilled } from "react-icons/tb";

const navItems = [
    {
        name: "Home",
        href: "/",
        mIcon: {
            outlined: HomeIconOutlined,
            solid: HomeIconSolid
        }
    },
    {
        name: "About",
        href: "/about",
        mIcon: {
            outlined: HiOutlineUser,
            solid: HiUser
        }
    },
    {
        name: "Skills",
        href: "/skills",
        mIcon: {
            outlined: TbBulb,
            solid: TbBulbFilled,
        }
    },
    {
        name: "Projects",
        href: "/projects",
        mIcon: {
            outlined: SiDatabricks,
            solid: TbBrandDatabricks
        }
    },
    {
        name: "Articles",
        href: "/articles",
        mIcon: {
            outlined: MdOutlineArticle,
            solid: MdArticle
        }
    },
]


export default navItems