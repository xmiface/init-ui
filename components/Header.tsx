import { observer } from "mobx-react-lite"
import Link from "next/link"
import { sButton } from "../pages"
import { RootStore } from "../store/RootStore"

export const sLink = ` text-twitchgray hover:text-twitchhovergrey active:text-twitchpink hover`

const Header = () => {
    return (
        <div className="py-2 flex justify-between items-center">
            <div className="flex gap-4">
                {RootStore.user.links.map(el => <Link href={el.href} key={el.href} className={sLink}>{el.heading}</Link>)}
            </div>

            <button className={sButton} onClick={() => RootStore.auth.logout()}>
                logout
            </button>
        </div>
    )
}


export default observer(Header)