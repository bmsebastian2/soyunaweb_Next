import React from "react";
import Image from "next/image";
const CardEjemplos = ({ add, name, url }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href={url} target="_blank" rel="noreferrer">
        <Image
          className="rounded-t-lg"
          src={add}
          alt=""
          width={500}
          height={500}
        />
      </a>
      <div className="p-5">
        <a href={url} target="_blank" rel="noreferrer">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
      </div>
    </div>
  );
};

export default CardEjemplos;
