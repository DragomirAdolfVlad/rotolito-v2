import React from 'react';
import Image from 'next/legacy/image';

function Wide() {
  return (
    <div className="relative h-[34vh] md:h-[50vh] md:max-h-[600px]">
      <div className="w-full h-full">
        <Image
          priority
          quality={100}
          src={'/ban-1.jpg'}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt='Wide photo'
        />
      </div>
    </div>
  );
}

export default Wide;
