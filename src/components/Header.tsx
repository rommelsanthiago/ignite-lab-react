import { Logo } from "./Logo";
import { List, X } from "phosphor-react"
import { useDispatch, useSelector } from 'react-redux'
import { menu } from "../redux/action"

export function Header() {

    const dispatch = useDispatch()
    const OpenMenu = useSelector(state => state)

    return(
        <header className="w-full py-5 flex items-center justify-center bg-gray-700 border-b border-gray-900 sm:justify-between sm:px-6">
            <Logo />
            {
                !OpenMenu 
                ? <List
                    size={34}
                    className="hidden sm:block cursor-pointer"
                    onClick={() => dispatch(menu(true))}
                />
                : <X
                    size={34}
                    className="hidden sm:block cursor-pointer"
                    onClick={() => dispatch(menu(false))}
                />
            }
        </header>
    )
}