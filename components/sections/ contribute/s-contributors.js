import Image from "next/image";

import { getAllContributors } from "../../../dummy-data-contributor.js";

function ContributorsSection() {
  const contributors = getAllContributors();

  return (
    <section className="pb-20">
      <div className="p-4 flex">
        <div className="w-2/4 h-[70%] flex flex-col justify-between">
          <h2 className="text-4xl pb-10">Contribute</h2>
          <p className="text-lg">
            Contribute to this global movement to uplift the DeSci Ecosystem
            through connection, events, and resources. Whether you’d be an
            amazing Github maintainer, event curator, fiscal or in kind sponsor,
            or regional connector, your skillsets can make a massive impact.
            Let’s shift the world together.
          </p>
        </div>
      </div>
      <ul>
        <div className="flex flex-wrap p-4">
          {contributors.map((contributor) => (
            <li className="mr-4 mb-4" key={contributor.id}>
              <a
                href={contributor.twitterLink}
                target="_blank"
                rel={"noreferrer"}
              >
                <div className="grid h-40 w-40">
                  <div className=" h-[100%] relative grayscale">
                    <Image
                      alt={contributor.name}
                      src={contributor.image}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="bg-black absolute h-40 w-40 z-1 opacity-0 text-white items-center flex justify-center hover:opacity-80 ease-in duration-100">
                    {"@" + contributor.name}
                  </div>
                </div>
              </a>
            </li>
          ))}
        </div>
      </ul>
    </section>
  );
}

export default ContributorsSection;
