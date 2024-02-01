import axios, { AxiosResponse } from "axios";
import { FC, useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { getNewBoxShadow } from "../../../utils/box-shadow";
import { timeout } from "../../../utils/timeout";

const delays = {
    transition: '.1s',
    columnDelay: 100,
    undisable: 300,
    removeOld: 300
}

type Root = HTMLDivElement | null;
const rootOnInit = (root: Root, url: string) => {
    if (!root) {
        return;
    }

    root.style.background = `url(${url})`;
    root.style.backgroundSize = `cover`;
}

const createTopImages = (values: number[][], images: string[], root: Root) => {
    values.forEach((value, col) => {
        let column = document.createElement('div');
        column.className = 'col';
        column.style.transform = 'translateY(-600px)'
        column.style.transition = delays.transition
        column.style.width = '100%';
        // column.style.width = 960 / col.length + 'px';

        let el = [] as HTMLElement[];

        value.forEach((item, row) => {
            const blockValue = values[col][row];
            let q = document.createElement('img');
            q.style.height = (600 / value.length) + 'px';
            q.style.margin = '0 auto';
            q.src = images ? images[blockValue] : '';
            q.style.objectFit = 'cover';
            el.push(q)
        })

        el.forEach(i => i.style.border = 'none !important');
        el.forEach(i => i.style.boxSizing = 'content-box');
        el.forEach(i => column.append(i));
        root && root.append(column);
    })
}

const moveImagesInRoot = (root: Root) => {
    const cols = root && root.querySelectorAll<HTMLElement>('.col');

    cols && cols.forEach((el, idx) => {
        setTimeout(() => {
            el.style.transform = 'translateY(0px)'
        }, idx * delays.columnDelay);
    })
}

const hideImages = async (root: Root) => {
    const cols = root && root.querySelectorAll<HTMLElement>('.col');
    cols && cols.forEach((element, index) => {
        setTimeout(() => {
            element.style.marginTop = '600px';
        }, index * delays.columnDelay);
    });

    await timeout(delays.removeOld);
    cols && cols.forEach(el => el.remove())
}

const Main: FC<{ setFullPageBg: (value: string) => void }> = ({ setFullPageBg }) => {
    const rootRef = useRef(null);
    const spaceRef = useRef(null);
    const [images, setImages] = useState<string[] | undefined>();

    const init = useCallback(async () => {
        const root = rootRef.current as HTMLDivElement | null;
        if (!root) {
            return;
        }

        type Response = AxiosResponse<{ bg: string, images: string[] }>

        try {
            const response = await axios.get('/api/projects/slot/content') as Response;
            setFullPageBg(response.data.bg);
            rootOnInit(root, response.data.bg);
            setImages(response.data.images);
        } catch (error) {
            console.log('error', error)
        }
    }, [])

    useLayoutEffect(() => void init(), []);

    const createNew = useCallback(async () => {
        type Response = AxiosResponse<{ slots: number[][] }>;

        try {
            const response = await axios.get('/api/projects/slot/spin') as Response;
            const values: number[][] = response.data.slots;

            const root = rootRef.current as HTMLDivElement | null;
            const spaceButton = spaceRef.current as HTMLButtonElement | null;

            if (!root || !spaceButton || !images) {
                return;
            }

            createTopImages(values, images, root)
            moveImagesInRoot(root);

            setTimeout(() => {
                spaceButton.disabled = false;
                spaceButton.focus();
                root.style.boxShadow = getNewBoxShadow();
            }, delays.undisable);
        } catch (error) {
            console.log(error)
        }

    }, [images])

    const removeOld = useCallback(async () => {
        const root = rootRef.current as HTMLDivElement | null;
        const spaceButton = spaceRef.current as HTMLButtonElement | null;

        if (!root || !spaceButton) {
            return;
        }

        root.style.boxShadow = getNewBoxShadow();
        spaceButton.disabled = true;

        await hideImages(root);
        createNew();
    }, [images])

    const handleClick = useCallback(() => removeOld(), [images, setImages])

    useEffect(() => {
        const spaceButton = spaceRef.current as HTMLButtonElement | null;

        if (spaceButton && images?.length) {
            spaceButton.disabled = true;
            createNew();
        }
    }, [images, setImages, createNew])

    return (
        <div className="left-0 top-0 h-full w-full rounded-3xl overflow-hidden">
            <button ref={spaceRef} onClick={handleClick} autoFocus className=" bg-[rgba(0,0,0,0.36)] disabled:bg-[rgba(73,71,71,0.36)] absolute bottom-[-150px] left-[320px] w-[320px] h-16">SPIN</button>
            <div className="duration-300 h-full w-full absolute left-0 top-0 flex overflow-hidden rounded-xl " ref={rootRef} />
        </div>
    )
}

export default Main;
