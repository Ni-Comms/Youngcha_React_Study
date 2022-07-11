import React from "react";

export default function Position() {
  return (
    <div>
      <div className="relative p-2 h-32 w-32 bg-green-300 bg-stripes bg-stripes-white rounded-md">
        <div className="absolute inset-x-0 top-0 h-16 bg-green-500 text-white font-extrabold text-2xl flex items-center justify-center rounded-md">1</div>
      </div>
      <br />
      <div className="relative p-2 h-32 w-32 bg-green-300 bg-stripes bg-stripes-white rounded-md">
        <div className="absolute inset-y-0 right-0 w-16 bg-green-500 text-white font-extrabold text-2xl flex items-center justify-center rounded-md">2</div>
      </div>
      <br />
      <div className="relative p-2 h-32 w-32 bg-green-300 bg-stripes bg-stripes-white rounded-md">
        <div className="absolute inset-x-0 bottom-0 h-16 bg-green-500 text-white font-extrabold text-2xl flex items-center justify-center rounded-md">3</div>
      </div>
      <br />
      <div className="relative p-2 h-32 w-32 bg-green-300 bg-stripes bg-stripes-white rounded-md">
        <div className="absolute inset-y-0 left-0 w-16 bg-green-500 text-white font-extrabold text-2xl flex items-center justify-center rounded-md">4</div>
      </div>
      <br />
      <div className="relative p-2 h-32 w-32 bg-green-300 bg-stripes bg-stripes-white rounded-md">
        <div className="absolute inset-0 bg-green-500 text-white font-extrabold text-2xl flex items-center justify-center rounded-md">5</div>
      </div>
      <br />
      <div className="relative p-2 h-32 w-32 bg-green-300 bg-stripes bg-stripes-white rounded-md">
        <div className="absolute left-0 top-0 h-16 w-16 bg-green-500 text-white font-extrabold text-2xl flex items-center justify-center rounded-md">6</div>
      </div>
      <br />
      <div className="relative p-2 h-32 w-32 bg-green-300 bg-stripes bg-stripes-white rounded-md">
        <div className="absolute top-0 right-0 h-16 w-16 bg-green-500 text-white font-extrabold text-2xl flex items-center justify-center rounded-md">7</div>
      </div>
      <br />
      <div className="relative p-2 h-32 w-32 bg-green-300 bg-stripes bg-stripes-white rounded-md">
        <div className="absolute right-0 bottom-0 h-16 w-16 bg-green-500 text-white font-extrabold text-2xl flex items-center justify-center rounded-md">
          8
        </div>
      </div>
      <br />
      <div className="relative p-2 h-32 w-32 bg-green-300 bg-stripes bg-stripes-white rounded-md">
        <div className="absolute bottom-0 left-0 h-16 w-16 bg-green-500 text-white font-extrabold text-2xl flex items-center justify-center rounded-md">
          9
        </div>
      </div>
    </div>
  );
}
