import React from 'react';
import { useState } from 'react';
import { sendContactForm } from '../lib/api';
import { useRouter } from 'next/router';
import Image from 'next/legacy/image';

const initValues = {
    name: "",
    fname: "",
    phone: "",
    ocupatie: "",
    varsta: "",
    localitate: "",
    judet: "",
    mesaj: "",
};

const initState = { values: initValues };

function Formular() {

    const router = useRouter();
    const [state, setState] = useState(initState);
    const [touched, setTouched] = useState({});
    const { values, error} = state;

    const handleChange = ({target}) => setState((prev) => ({
        ...prev,
        values: {
            ...prev.values,
            [target.name]: target.value,
        },
    }));

    const handleSubmit = e => {
        e.preventDefault();
        router.push(`/multumim`)
      }
    
    const onSubmit = async () => {
        setState((prev) => ({
            ...prev,
        }));
        try {
        await sendContactForm(values);
        } catch (error) {
            setState((prev) => ({
                ...prev,
                error: error.message,
            }));
        }
    };
   
  return (
    <div id="cariere" className="relative p-14">
    <div className="absolute top-0 left-0 w-full h-full">
        <Image
          src="/formular.jpg"
          priority
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
    <div className="container relative mt-16 mb-24">

        <div  className="text-white">
        <h1 className="text-4xl lg:text-7xl mb-16 text-center">Vino in echipa noastra!</h1>
        </div>

        <div  className="flex">
        <form className="w-full p-8 sm:p-8 lg:w-1/3 mx-auto max-w-2lg bg-white bg-opacity-25 rounded-lg lg:mr-4" method="POST" onSubmit={handleSubmit}>
        <div className="flex flex-wrap mb-6 justify-end">
          <div className="w-full mb-6 justify-center lg:justify-end">
            <label className="block uppercase tracking-wide text-xs font-bold mb-2 text-white" htmlFor="name">
              Nume*
            </label>
            <input
              className="block w-full bg-white border border-gray-300 rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white"
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="w-full mb-6 justify-center lg:justify-end">
            <label className="block uppercase tracking-wide text-xs font-bold mb-2 text-white" htmlFor="fname">
              Prenume*
            </label>
            <input
              className="block w-full bg-white border border-gray-300 rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white"
              type="text"
              name="fname"
              value={values.fname}
              onChange={handleChange}
              required
            />
          </div>
          <div className="w-full mb-6 justify-center lg:justify-end text-white">
            <label className="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor="phone">
              Numar de telefon*
            </label>
            <input
              className="block w-full bg-white border border-gray-300 rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white"
              type="text"
              name="phone"
              value={values.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="w-full mb-6 justify-center lg:justify-end text-white">
            <label className="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor="localitate">
              Localitate
            </label>
            <input
              className="block w-full bg-white border border-gray-300 rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white"
              type="text"
              name="localitate"
              value={values.localitate}
              onChange={handleChange}
            />
          </div>
          <div className="w-full mb-6 justify-center lg:justify-end text-white">
            <label className="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor="judet">
              Judet
            </label>
            <input
              className="block w-full bg-white border border-gray-300 rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white"
              type="text"
              name="judet"
              value={values.judet}
              onChange={handleChange}
            />
          </div>
          <div className="w-full mb-6 justify-center lg:justify-end text-white">
            <label className="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor="ocupatie">
              Ocupatie*
            </label>
            <input
              className="block w-full bg-white border border-gray-300 rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white"
              type="text"
              name="ocupatie"
              value={values.ocupatie}
              onChange={handleChange}
              required
            />
          </div>
          <div className="w-full mb-6 justify-center lg:justify-end text-white">
            <label className="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor="mesaj">
              Mesaj (optional)
            </label>
            <textarea
              className="block w-full bg-white border border-gray-300 rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white"
              name="mesaj"
              value={values.mesaj}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>
        <div className="flex justify-center text-white">
          <button
            className="shadow bg-[#1e3d73] hover:bg-blue-800 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 w-1/2 rounded"
            type="submit"
            disabled={!values.name || !values.fname || !values.ocupatie || !values.phone}
            onClick={onSubmit}
          >
            Trimite
          </button>
        </div>
        </form>
        </div>
        </div>
    </div>
  );
}

export default Formular;
