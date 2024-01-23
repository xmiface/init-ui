// useless testing
import { useCallback, useEffect, useState } from "react";

const sToggleButton = "border-2 border-twitchdarkpink hover:border-twitchpink duration-300 rounded-2xl p-4 text-twitchdarkpink  hover:text-twitchpink";
const sOptionsWrapper = "flex flex-col gap-2 p-4 bg-black absolute top-[86px] left-[0] w-[100%] bg-twitchdarkbg z-30 ";
const sOption = "border-2 bg-pink-300 border-twitchdarkpink hover:border-twitchpink duration-300 rounded-md p-4 text-twitchdarkpink z-30  hover:text-twitchpink";
const sSelect = "relative w-[100%] flex flex-col gap-10";
const onBlurWrapper = "fixed top-0 left-0 h-screen w-screen bg-red-500 opacity-10 z-20";

const useUef = (isOpen: boolean, setList: (value: string[]) => void, setIsLoadingList: (value: boolean) => void) => {
    useEffect(() => {
        if (isOpen) {
            setIsLoadingList(true);
            setTimeout(() => {
                setIsLoadingList(false);
                setList(['a1', 'a2', 'a3'])
            }, 1000);
        }
        if (!isOpen) {
            setList([])
        }
    }, [isOpen])

    return null;
}

const useListInit = () => {
    const [list, setList] = useState<string[]>([]);
    const [isOpenList, setIsOpenList] = useState<boolean>(false);
    const [isLoadingList, setIsLoadingList] = useState<boolean>(false);
    type SetBoolean = (value: boolean) => void;
    type Control = [string[], (value: string[]) => void, boolean, SetBoolean, boolean, SetBoolean]
    const control = [list, setList, isOpenList, setIsOpenList, isLoadingList, setIsLoadingList] as Control
    return control
}

const Index = () => {
    const [listA, setListA, isOpenListA, setIsOpenListA, isLoadingListA, setIsLoadingListA] = useListInit();
    const [listB, setListB, isOpenListB, setIsOpenListB, isLoadingListB, setIsLoadingListB] = useListInit();
    const [listC, setListC, isOpenListC, setIsOpenListC, isLoadingListC, setIsLoadingListC] = useListInit();

    const handleCloseAll = () => {
        setIsOpenListA(false);
        setIsOpenListB(false);
        setIsOpenListC(false)
    }

    const a = useUef(isOpenListA, setListA, setIsLoadingListA);
    const b = useUef(isOpenListB, setListB, setIsLoadingListB);
    const c = useUef(isOpenListC, setListC, setIsLoadingListC);

    const handleClickTitle = useCallback((list: string) => {
        handleCloseAll()

        switch (list) {
            case 'a': setIsOpenListA(!isOpenListA); break;
            case 'b': setIsOpenListB(!isOpenListB); break;
            case 'c': setIsOpenListC(!isOpenListC); break;
        }
    }, [isOpenListA, isOpenListB, isOpenListC]);

    const getSelect = (value: string, setIsOpenList: (value: boolean) => void, isOpen: boolean, list: string[], isLoading: boolean) => (
        <div className={sSelect}>
            <button
                className={sToggleButton}
                onClick={() => handleClickTitle(value)}
            >dropdown {value} {isLoading && <p>loading..</p>} </button>

            {(isOpen && list.length > 0) && <div className={onBlurWrapper} onClick={() => setIsOpenList(false)} />}
            {(isOpen && list.length > 0) && <div className={sOptionsWrapper} >
                {list.map(el => (
                    <button key={el} className={sOption} >{el}</button>
                ))}</div>}
        </div>
    )

    return (
        <div className=" bg-[#0E0E0E] h-screen p-4 w-full  text-white mx-auto">

            <h2 className=" text-6xl text-center  font-extralight">Triple dropbox</h2>

            <div className="w-[860px] mx-auto flex flex-col justify-between h-full  py-4 mt-8">

                <div className="flex flex-col items-center justify-center gap-8 ">

                    {getSelect('a', setIsOpenListA, isOpenListA, listA, isLoadingListA)}
                    {getSelect('b', setIsOpenListB, isOpenListB, listB, isLoadingListB)}
                    {getSelect('c', setIsOpenListC, isOpenListC, listC, isLoadingListC)}

                </div>
            </div>
        </div>
    )
};

export default Index;
