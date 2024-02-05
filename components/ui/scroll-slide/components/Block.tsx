import { observer } from 'mobx-react-lite';
import Image, { StaticImageData } from 'next/image';
import React, { FC } from 'react';

export type SlideValue = { bg: string; heading: string; img: StaticImageData };

const Block: FC<{ slide: SlideValue }> = ({ slide: { bg, heading, img } }) => {
	const SBased = 'w-full flex flex-col gap-10 h-full justify-center items-center relative justify-center';
	const SBackground = `linear-gradient(90deg, ${bg} 0%, rgb(76 29 149) 100%)`;

	return (
		<div className='w-full flex  h-full text-white'>
			<div className={SBased} style={{ background: SBackground }}>
				<h2 className=' text-5xl font-montserrat z-10'>{heading}</h2>
				<div className='w-[50%] mx-auto relative'>
					<h2 className='  text-9xl font-montserrat absolute top-[10vh] opacity-10 left-0 mx-auto text-center'>
						{heading}
					</h2>
				</div>
				<Image priority alt='zxc' className='z-20' width={800} height={480} src={img} />
			</div>
		</div>
	);
};

export default observer(Block);
