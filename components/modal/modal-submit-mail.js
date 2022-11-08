

function ModalSubmitMail() {



  return (
    <div className="bg-white p-4 flex flex-col items-center calc w-[30rem] z-20 fixed top-[20vh] shadow-white-500/50" id="modal">
      <div className="h-full w-full">
        <h2 className="text-4xl pt-4 pb-12">Get the latest desci news 💌</h2>
        <div>
          <p className="text-lg">
            Submit your email and stay up to date with the events and news in
            descentralized science.{" "}
          </p>
        </div>

        {/* ##email newsletter */}

        <div className="my-14">
          <form className="" action="/send-data-here" method="post">
            <label className="mb-5 text-[#B1B1B1]" for="email">
              you will recieve ~1 Mail per month
            </label>
            <div className="flex justify-between border-solid border-b border-black mr-[3%]">
              <input
                type="email"
                className="w-[80%] h-10 placeholder:text-black placeholder:text-l focus:outline-none"
                placeholder="your@email.com"
                id="first"
                name="first"
              />
              <button type="submit" className="text-l">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ModalSubmitMail;
