import ArrowUpRight from "../../icons/ArrowUpRight";
import Backdrop from "../../modal/backdrop";
import ModalSubmitEvent from "../../modal/modal-submit-event";
import { useState } from "react";



function ContributeSection() {
  const [modalIsOpen, setModalisOpen] = useState(false);

  function openModalHandler() {
    setModalisOpen(true);
    document.body.style.overflow = "hidden";
  }

  function closeModalHandler() {
    setModalisOpen(false);
    document.body.style.overflow = "scroll";
  }

  return (
    <section id="contribute">
      <div className="flex items-center justify-center px-4 py-20 space-x-20">
        <div className="w-full h-full bg-white">
          {" "}
          <div className="h-20 flex items-center">
            <h2 className="text-2xl text-black">
              Join us in organizing an event
            </h2>
          </div>
          <div className="pt-2 pb-6">
            <p className="text-lg text-descigreyfont">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              aliquam orci nec elit. congue sodales a quis erat. Quisque eget
              est quis orci ornare interdum. Suspendisse tincidunt ligula quis
              ultrices solicitudin. Done tincidunt pulvinar nisl, at interdum
              libero mollis ac. Donec ut dignissim dui. Integer ac est congue,
              congue velit ut, tempus purus. Donec ut dignissim dui. Integer ac
              est congue, congue velit. ut, tempus purus..
            </p>
          </div>
          <div>
            <div className="w-full bg-black text-white h-10 flex items-center justify-center rounded-full text-xl mb-6">
              <a>Explore More</a>
            </div>
            <div className="pt-3">
              <ul>
                <li>
                  <div className="flex w-full group/edit hover:cursor-pointer">
                    <div className="h-10 border-solid border-t w-full border-black flex items-center justify-between">
                      <p>Helpful link #3</p>
                    </div>
                    <div className="w-10 h-10 ml-2 bg-desciblue flex items-center justify-center">
                      <div className="group-hover/edit:rotate-45 duration-200">
                        <ArrowUpRight color="white" />
                      </div>
                    </div>
                  </div>
                </li>
                <div className="flex w-full group/edit hover:cursor-pointer">
                  <div className="h-10 border-solid border-t w-full border-black flex items-center justify-between">
                    <p>Helpful link #3</p>
                  </div>
                  <div className="w-10 h-10 ml-2 bg-descired flex items-center justify-center">
                    <div className="group-hover/edit:rotate-45 duration-200">
                      <ArrowUpRight color="white" />
                    </div>
                  </div>
                </div>
                <li>
                  <div className="flex w-full group/edit hover:cursor-pointer">
                    <div className="h-10 border-solid border-t border-b w-full border-black flex items-center justify-between">
                      <p>Helpful link #3</p>
                    </div>
                    <div className="w-10 h-10 ml-2 bg-black flex items-center justify-center">
                      <div className="group-hover/edit:rotate-45 duration-200">
                        <ArrowUpRight color="white" />
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full h-full bg-white ">
          <div className="h-20 flex items-center">
            <h2 className="text-2xl text-black">
              Contribute to decentralized science
            </h2>
          </div>
          <div className="pt-2 pb-6">
            <p className="text-lg text-descigreyfont">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              aliquam orci nec elit. congue sodales a quis erat. Quisque eget
              est quis orci ornare interdum. Suspendisse tincidunt ligula quis
              ultrices solicitudin. Done tincidunt pulvinar nisl, at interdum
              libero mollis ac. Donec ut dignissim dui. Integer ac est congue,
              congue velit ut, tempus purus. Donec ut dignissim dui. Integer ac
              est congue, congue velit. ut, tempus purus..
            </p>
          </div>
          <div>
            <div className="w-full bg-black text-white h-10 flex items-center justify-center rounded-full text-xl mb-6">
              <a>Explore More</a>
            </div>
            <div className="pt-3">
              <ul>
                <li>
                  <div
                    className="flex w-full group/edit hover:cursor-pointer"
                    onClick={openModalHandler}
                  >
                    <div className="h-10 border-solid border-t w-full border-black flex items-center justify-between">
                      <p>Create an Event</p>
                    </div>
                    <div className="w-10 h-10 ml-2 bg-desciblue flex items-center justify-center">
                      <div className="group-hover/edit:rotate-45 duration-200">
                        <ArrowUpRight color="white" />
                      </div>
                    </div>
                  </div>
                </li>
                <div className="flex w-full group/edit hover:cursor-pointer">
                  <div className="h-10 border-solid border-t w-full border-black flex items-center justify-between">
                    <p>Join our telegram group</p>
                  </div>
                  <div className="w-10 h-10 ml-2 bg-descired flex items-center justify-center">
                    <div className="group-hover/edit:rotate-45 duration-200">
                      <ArrowUpRight color="white" />
                    </div>
                  </div>
                </div>
                <li>
                  <div className="flex w-full group/edit hover:cursor-pointer">
                    <div className="h-10 border-solid border-t border-b w-full border-black flex items-center justify-between">
                      <p>Get in touch with our team</p>
                    </div>
                    <div className="w-10 h-10 ml-2 bg-black flex items-center justify-center">
                      <div className="group-hover/edit:rotate-45 duration-200">
                        <ArrowUpRight color="white" />
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {modalIsOpen && (
        <ModalSubmitEvent onClick={closeModalHandler}
        />
      )}
      {modalIsOpen && <Backdrop onClick={closeModalHandler} />}
    </section>
  );
}

export default ContributeSection;
