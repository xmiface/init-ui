import axios from "axios";
import clsx from "clsx";
import { observer } from "mobx-react-lite";

import { useEffect, useRef, useState } from "react";

const sButton = 'rounded-xl border-2 border-twitchdarkpink hover:border-twitchpink duration-300 py-2 px-4 ';

const Index = () => {
    const [folders, setFolders] = useState<string[]>([]);
    const [subFolders, setSubFolders] = useState<string[]>([]);
    const pageNameRef = useRef(null);
    const [folder, setFolder] = useState<string>('');
    const [nameError, setNameError] = useState<boolean>(false);

    const handleType = (e) => {
        if (pageNameRef.current) {

            const text = pageNameRef.current.value;
            var english = /^[A-Za-z0-9-]*$/;
            if (!english.test(text) || text.match(' ')) {
                setNameError(true);
                return;
            }
            setNameError(false);

        }
    }

    useEffect(() => {
        axios.post('/api/projects/self-control/create-page', { type: 'getFolders' })
            .catch(err => console.log(err))
            .then(res => setFolders(res?.data))
    }, [])

    const hCreateProject = () => {
        if (pageNameRef?.current) {
            const title = pageNameRef.current.value
            axios.post('/api/projects/self-control/create-page', { type: 'createPage', folder, title })
                .catch(err => console.log(err))
                .then(res => console.log(res?.data))
        }
    };

    return (
        <div className=" bg-[#0E0E0E] h-screen px-4 w-full text-white">
            <div className="w-[1440px] mx-auto text-xl">
                <h1 className=" text-3xl text-center py-4">self control</h1>

                <div className="flex gap-8 h-12 my-8">
                    <input className="bg-slate-900 rounded-xl border-twitchdarkpink hover:border-twitchpink duration-300 py-2 px-4" type="text" placeholder="page name" ref={pageNameRef} onChange={handleType} />
                    <button onClick={hCreateProject} className={sButton}>create page</button>
                    {nameError && <p className="text-red-500">Wrong page name</p>}

                </div>

                <div className="flex gap-8">
                    <div className="flex flex-col gap-8 w-[300px]">
                        <h2>folders</h2>
                        {folders.map(el => <button key={el} className={clsx(sButton, el === folder ? 'text-twitchpink' : '')}
                            onClick={() => {
                                setFolder(el);
                                axios.post('/api/projects/self-control/create-page', { type: 'getSubFolders', folder: el })
                                    .catch(err => console.log(err))
                                    .then(res => setSubFolders(res?.data))
                            }}
                        >{el}</button>)}


                    </div>

                    <div className="flex flex-col gap-8 w-[300px]">
                        <h2>sub folders</h2>
                        {subFolders.map(el => <button key={el} className={sButton}>{el}</button>)}
                    </div>


                </div>


            </div>
        </div>
    )
}

export default observer(Index);