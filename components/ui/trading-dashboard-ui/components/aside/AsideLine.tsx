export const AsideLine = ({ last, icon, title, unread }: { last?: boolean, icon: JSX.Element, title: string, unread?: boolean }) => (
    <>
        {last !== undefined && <p> {last ? '-' : '+'} </p>}
        {icon}
        <p className="flex items-center relative">{title}  {unread && <span className="absolute right-[-15px] text-2xl text-green-500 top-[-10px] mb-2 ">.</span>} </p>
    </>
)