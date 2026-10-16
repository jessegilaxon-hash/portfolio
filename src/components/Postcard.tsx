function Postcard() {
  return (
    <section className="outlin outline-2 outline-black max-w-fit max-h-fit align-middle bg-gray-900">
      <header className="flex w-full items-center justify-between px-4 bg-gray-900 text-white ">
        <div className="flex items-center gap-3">
          <img
            src="https://picsum.photos/50/50"
            alt=""
            className="rounded-full"
          />
          <div className="">
            Bill Browning
            <br />
            <time
              dateTime="2026-10-07T14:30:00Z"
              className="text-sm text-gray-300"
            >
              43 minutes ago
            </time>
          </div>
        </div>
        <div className="flex items-center gap-3 ml-auto">
          <a className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#d1d5d5"
            >
              <path d="M240-400q-33 0-56.5-23.5T160-480q0-33 23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm240 0q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm240 0q-33 0-56.5-23.5T640-480q0-33 23.5-56.5T720-560q33 0 56.5 23.5T800-480q0 33-23.5 56.5T720-400Z" />
            </svg>
          </a>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#d1d5d5"
              className="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </a>
        </div>
        <br />
      </header>
      <div className="px-4 py-2 bg-gray-900 text-white">I agree, why?...</div>
      <div className="relative flex flex-col item">
        {" "}
        {/*main images*/}
        <img
          src="https://picsum.photos/400/150"
          width={500}
          height={200}
          className="h-auto max-w-full block"
        />
        <img
          src="https://picsum.photos/id/1002/400/150"
          width={500}
          height={200}
          className="h-auto max-w-full block"
        />
      </div>
      <div className="flex space-x-6 items-center justify-start bg-gray-900 pt-2 ps-2">
        {" "}
        {/*bottom icons */}
        <div className="inline-flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#EFEFEF"
          >
            <path d="M720-120H280v-520l280-280 50 50q7 7 11.5 19t4.5 23v14l-44 174h258q32 0 56 24t24 56v80q0 7-2 15t-4 15L794-168q-9 20-30 34t-44 14Zm-360-80h360l120-280v-80H480l54-220-174 174v406Zm0-406v406-406Zm-80-34v80H160v360h120v80H80v-520h200Z" />
          </svg>
          <p className="text-gray-300 text-sm">97</p>
        </div>
        <div className="inline-flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#EFEFEF"
          >
            <path d="M880-80 720-240H160q-33 0-56.5-23.5T80-320v-480q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v720ZM160-320h594l46 45v-525H160v480Zm0 0v-480 480Z" />
          </svg>
          <p className="text-gray-300 text-sm">10</p>
        </div>
        <div className="inline-flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#EFEFEF"
          >
            <path d="m640-280-57-56 184-184-184-184 57-56 240 240-240 240ZM80-200v-160q0-83 58.5-141.5T280-560h247L383-704l57-56 240 240-240 240-57-56 144-144H280q-50 0-85 35t-35 85v160H80Z" />
          </svg>
          <p className="text-gray-300 text-sm">15</p>
        </div>
      </div>
    </section>
  );
}

export default Postcard;
