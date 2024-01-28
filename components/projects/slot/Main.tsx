import axios from "axios";
import { FC, useCallback, useEffect, useRef } from "react";
import { getNewBoxShadow } from "../../../utils/box-shadow";
import { timeout } from "../../../utils/timeout";
import { small } from "../../issue/infinity-scroll";

const delays = {
    transition: '.1s',
    columnDelay: 100,
    undisable: 300,
    removeOld: 300
}

const COLUMNS = ['left', 'middle', 'right'];

const images = [
    small + '0b2d79e5-c6fe-4f6b-800e-dc03a28a4438',
    small + '3bff21cb-3150-45dc-8d73-11378e142c49',
    small + '19e7cecd-c686-4a5a-9893-14f08d298b99',
    small + '0784e4db-5968-4292-b627-d605169ead7b',
    small + 'd9943cb4-e9f2-4ee3-a22b-fecf5bee481d',
    small + '1dbbfef3-1201-414c-965a-02eb7c9ee462',
    small + '2676de17-fd47-4381-9300-a270e1672563',
    small + 'f8e5f725-ddb4-49e3-b135-0738238b745d',
    small + 'f9b7ab3f-fcab-49d8-9aab-63e199ed6e9b',
    small + '55dca8ce-339f-411c-be76-651a52005b19',
]

const SLOT_BG = 'https://image.lexica.art/full_webp/4de811ac-40f1-4bdd-8b92-594e4872b776'

const Main: FC<{ setFullPageBg: (value: string) => void }> = ({ setFullPageBg }) => {
    const rootRef = useRef(null);
    const spaceRef = useRef(null);

    useEffect(()=>{
        console.log('upd', SLOT_BG)
        setFullPageBg(SLOT_BG);
    },[])

    const createNew = useCallback(async () => {

        await axios.get('/api/projects/slot/spin').catch(err => console.log(err)).then(res => {
            const values: number[][] = res.data.slots;

            if (Array.isArray(values)) {

                values.forEach((value, col) => {
                    let column = document.createElement('div');
                    column.className = 'col';
                    column.style.marginTop = '-600px'
                    column.style.transition = delays.transition

                    let el = [];

                    COLUMNS.forEach((item, row) => {
                        const blockValue = values[col][row];

                        let q = document.createElement('img');

                        q.style.height = '200px'
                        q.style.width = '320px'
                        q.src = images[blockValue]
                        q.style.objectFit = 'cover'

                        el.push(q)
                    })

                    el.forEach(i => i.style.border = 'none !important');
                    el.forEach(i => i.style.boxSizing = 'content-box');
                    el.forEach(i => column.append(i));
                    rootRef.current.append(column);
                })
            }

            const cols = rootRef.current.querySelectorAll('.col');

            cols.forEach((el, idx) => {
                setTimeout(() => {
                    el.style.marginTop = '0px'
                }, idx * delays.columnDelay);
            })

            setTimeout(() => {
                spaceRef.current.disabled = false;
                spaceRef.current.focus();
                rootRef.current.style.boxShadow = getNewBoxShadow();
            }, delays.undisable);
        })
    }, [])

    const removeOld = useCallback(async () => {
        const current = rootRef.current
        if (!current) {
            return;
        }

        rootRef.current.style.boxShadow = getNewBoxShadow();
        spaceRef.current.disabled = true;

        const cols = current.querySelectorAll('.col');
        cols.forEach((element, index) => {
            setTimeout(() => {
                element.style.marginTop = '600px';
            }, index * delays.columnDelay);
        });

        await timeout(delays.removeOld);
        cols.forEach(el => el.remove())
        createNew();
    }, [])

    const handleClick = useCallback(() => {
        removeOld();
    }, [])

    useEffect(() => {
        spaceRef.current.disabled = true;

        if (images?.length) {
            createNew();
        }
    }, [])

    return (
        <div className="left-0 top-0 h-full w-full rounded-3xl overflow-hidden" style={{ background: `url(${SLOT_BG})`, backgroundSize: 'cover' }}>
            <button ref={spaceRef} onClick={handleClick} autoFocus className=" bg-[rgba(0,0,0,0.36)] disabled:bg-[rgba(73,71,71,0.36)]  absolute bottom-[-150px] left-[320px] w-[320px] h-16">SPIN </button>
            <div className="duration-300 h-full w-full absolute left-0 top-0 flex overflow-hidden rounded-xl " ref={rootRef} />
        </div>
    )
}

export default Main;
