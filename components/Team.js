import React from 'react';
import Image from 'next/legacy/image';

function Team() {
  return (
    <div className="container relative bg-white mb-20 mt-12">
    <div id="echipa-noastra" className="flex flex-wrap text-lg indent-6 text-center leading-relaxed">
      <div className="mx-auto text-[#0E136C]">
        <h1 className="text-3xl font-bold mt-8 mb-4">Echipa noastră</h1>
        <p>Avem o echipă performantă și o strategie de succes! Ce ne diferențiază? Credem și investim în oameni și în tehnologie.</p>
      </div>
    </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-[#707070] mt-12">
        <div className="flex flex-col items-center">
          <div className="relative h-[168px] w-[168px] rounded-full">
            <Image src="/people.png" alt="Image 1" layout="fill" objectFit="cover" />
          </div>
          <h1 className="mt-2 text-center text-2xl">900</h1>
          <p className="mt-0 text-center">angajati</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="relative h-[168px] w-[168px] rounded-full">
            <Image src="/printer.png" alt="Image 2" layout="fill" objectFit="cover" />
          </div>
          <h1 className="mt-2 text-center text-2xl">320.000</h1>
          <p className="mt-0 text-center">tone de hartie tiparita în fiecare an</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="relative h-[168px] w-[168px] rounded-full">
            <Image src="/money.jpg" alt="Image 3" layout="fill" objectFit="cover" />
          </div>
          <h1 className="mt-2 text-center text-2xl">50.000.000</h1>
          <p className="mt-0 text-center">euro investiti în ultimii 2 ani</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="relative h-[168px] w-[168px] rounded-full">
            <Image src="/favorite.jpg" alt="Image 4" layout="fill" objectFit="cover" />
          </div>
          <h1 className="mt-2 text-center text-2xl">45</h1>
          <p className="mt-0 text-center">ani de istorie</p>
        </div>
      </div>
    </div>
  );
}

export default Team;
