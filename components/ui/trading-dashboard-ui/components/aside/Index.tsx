import Image from 'next/image';
import home from '../../public/carbon-trade.svg';
import { asideTop, asideBottom } from '../../data';
import { AsideBlock } from './AsideBlock';
import { InfoBlock } from './InfoBlock';

export default function () {
    return (
        <div className="w-[300px] flex flex-col">
            <Image priority  className="border-b-2 py-8 mb-8  border-zinc-700" src={home} alt="Home link icon" />

            <div className='flex flex-col h-full justify-between'>
                <AsideBlock sectionTitle='General' section={asideTop} />
                <AsideBlock sectionTitle='Profile' section={asideBottom} />
            </div>

            <InfoBlock />
        </div>
    )
}