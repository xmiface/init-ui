import clsx from "clsx";
import { RootStore } from "../store/RootStore";
const textStyle = "text-slate-500 hover:text-slate-100";
const outlineStyle = "outline-none hover:outline-none hover:outline-4 active:outline-none";
const borderStyle = "border-2 border-slate-500 hover:border-slate-300 active:border-slate-100";
const customStyle = `duration-200 bg-slate-900 rounded-md`;

export default function LogoutButton() {
    return <button onClick={() => RootStore.auth.logout()} className={clsx(customStyle, textStyle, outlineStyle, borderStyle, "p-2")}>Logout</button>;
};