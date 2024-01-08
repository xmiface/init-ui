import { observer } from "mobx-react-lite";
import Link from "next/link";

export const sButton = `py-2 px-4 border-2 border-zinc-800 bg-twitchpink hover:bg-twitchdarkpink rounded-md`;

const Index = () => {
  return (
    <div className="flex flex-col">
     <Link  href='/dnd'> dnd </Link>
     <Link  href='/ws'> ws </Link>
    </div>
  );
};

export default observer(Index);
