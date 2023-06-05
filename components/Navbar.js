import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';

function Navbar() {
    const router = useRouter();
  
    return (
      <header className="sticky top-0 z-10 backdrop-filter backdrop-blur-lg">
        <div className="bg-[#0E136C] text-white font-Sans shadow-[#0E136C] z-120">
          <div className="container flex flex-nowrap space-x-7 text-sm items-center text-center justify-center py-0.5">
            <a className="hover:text-[#CCCCCC] hover:underline" href="https://www.rotolitolombarda.it/en/company/contacts">
              Location/contacts
            </a>
            <a className="hover:text-[#CCCCCC] hover:underline" href="https://www.rotolitolombarda.it/en/quotation">
              Quotation
            </a>
            <a className="hover:text-[#CCCCCC] hover:underline" href="https://www.rotolitolombarda.it/en/reserved-area">
              RESERVED AREA
            </a>
          </div>
        </div>
        <div className="container mx-auto h-20 flex flex-wrap items-center justify-between flex-grow">
          <div className="flex w-[160px] md:w-auto h-auto">
            <Image
              className="cursor-pointer"
              priority
              quality={100}
              src={"/logo.svg"}
              width={220}
              height={63}
              alt=""
              onClick={() => router.push("/hr")}
            />
          </div>
          <div>

          <div className="hidden lg:flex lg:flex-grow lg:items-center lg:justify-end lg:space-x-2">
            <Link href="#despre-noi">
            <span className="p-2 text-[#707070] font-semibold cursor-pointer hover:text-[#0E136C] ease-in duration-200">Despre noi</span>
            </Link>
            <Link href="#echipa-noastra">
            <span className="p-2 text-[#707070] font-semibold cursor-pointer hover:text-[#0E136C] ease-in duration-200">Echipa noastra</span>
            </Link>
            <Link href="#produse">
            <span className="p-2 text-[#707070] font-semibold cursor-pointer hover:text-[#0E136C] ease-in duration-200">Produse</span>
            </Link>
            <Link href="#cariere">
            <span className="p-2 text-[#707070] font-semibold cursor-pointer hover:text-[#0E136C] ease-in duration-200">Cariere</span>
            </Link>
            <Link href="https://www.rotolitolombarda.it/en">
            <span className="relative">
            <span className="ml-4 px-5 py-7 bg-[#0E136C] text-white font-semibold cursor-pointer flex items-center">
                Home
                <img src="/arrow.svg" alt="Arrow" className="ml-2 h-4 w-4" />
                </span>
            </span>
            </Link>
           </div>
          </div>
        </div>
      </header>
    );
  }
  
  export default Navbar;
  
