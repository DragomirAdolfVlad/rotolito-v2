import React from 'react';
import Image from 'next/legacy/image';
import { useRouter } from 'next/router';

function Footer() {
    const router = useRouter();
    const showdate = new Date();
    const displatodaysdate = showdate.getFullYear();
  
    return (
      <div className="mx-auto">
        <footer className="bg-[#6B6EA4] pt-6">
          <div className="flex flex-col md:flex-row justify-between container">
            <div className="flex items-center justify-start mb-5 md:mb-0">
              <Image
                className="cursor-pointer"
                priority
                quality={100}
                src={"/logo-2.svg"}
                width={220}
                height={63}
                alt=""
                onClick={() => router.push("/hr")}
              />
            </div>
            <div className="text-white md:text-right">
              <ul className="mx-auto">
                <li className="mb-3 text-xl">
                  <a href="#" className="hover:underline">ROTOLITO ROMANIA</a>
                </li>
                <li className="mb-1">
                  <a href="#" className="hover:underline">Soseaua Cernica, nr 61, Pantelimon, Ilfov, 077145</a>
                </li>
                <li className="mb-1">
                  <a href="#" className="hover:underline">Tel: 021 351 72 55, 0799 212 301; 0743 555 220</a>
                </li>
                <li className="mb-5">
                  <a href="#" className="hover:underline">recrutare@rotolito.ro</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="py-5 bg-[#0E136C] text-end">
            <div className="container">
            <span className="text-sm text-gray-500 dark:text-gray-300">©{displatodaysdate} <a href="https://google.com/">Rotolino™</a>. All Rights Reserved.</span>
            </div>
          </div>
        </footer>
      </div>
    );
  }
  
  export default Footer;
  