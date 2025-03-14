import { Link } from "react-router-dom"

interface MenuNavBarProps {
    title: string
    isActive: boolean
    link: string
}

const MenuNavBar = ({title, isActive, link} : MenuNavBarProps) => {
    return (
<Link to={`/${link}`} className={`${isActive ? 'border-b-2  border-red-500  font-bold' : ' cursor-pointer p-1  '}`}><span className="text-primary text-xl" >{title}</span></Link>
    )
}

export default MenuNavBar