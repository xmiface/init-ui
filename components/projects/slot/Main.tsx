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
    small + '154a1d92-617f-4cca-9e82-49825ee93e26',
    small + '8208d083-375d-49de-9cb4-b551068f44a7',
    small + '0b2d79e5-c6fe-4f6b-800e-dc03a28a4438',
    small + '1c7a6dcd-c673-4f98-a2c0-593d278a3b63',
    small + 'd785b833-a88c-4749-87a7-8ed24d00da64',
    small + '75837fff-a7fb-478c-9465-5f93c1bc2cd3',
    small + '77bb7cae-70b1-439e-a7cf-e24c5fb84404',
    small + '52e2e312-4fb7-4128-a131-30c159a532a0',
    small + '1dbbfef3-1201-414c-965a-02eb7c9ee462',
    small + '2767a76a-0bcb-4b4b-9d5d-e1037fd3f97e',
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
