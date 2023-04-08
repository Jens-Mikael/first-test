import Link from "next/link";


export default function Home() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      {/* MODEL 3 */}
      <div
        className="h-screen bg-cover bg-center text-center text-darkGrey items-center flex flex-col justify-between snap-start snap-always"
        id="model3"
        style={{
          backgroundImage: 'url("assets/model3.webp")',
        }}
      >
        <div className="pt-40 space-y-2">
          <div className="text-4xl font-medium">Model 3</div>
          <div className="text-sm underline">Varaa koeajo</div>
        </div>
        <div>
          <div className="mb-10 gap-5 md:gap-10 flex md:flex-row flex-col mx-5">
            <Link href="https://www.tesla.com/fi_fi/inventory/new/m3">
              <div className="bg-grey/80 text-white w-64 py-2 px-7 rounded hover:cursor-pointer">
                Varastoautot
              </div>
            </Link>
            <Link href="https://www.tesla.com/fi_fi/model3/design">
              <div className="text-grey bg-semiWhite/70 w-64 py-2 px-7 rounded hover:cursor-pointer">
                Suunnittele omasi
              </div>
            </Link>
          </div>
          <div className="text-xs font-light mb-4">
            Viiden tähden Euro NCAP -turvamerkintä
          </div>
        </div>
      </div>

      {/* MODEL Y */}
      <div
        className="h-screen bg-cover bg-center text-center text-darkGrey items-center flex flex-col justify-between snap-start snap-always"
        id="modely"

        style={{
          backgroundImage: 'url("assets/modely.webp")',
        }}
      >
        <div className="pt-40  space-y-2">
          <div className="text-4xl font-medium">Model Y</div>
          <div className=" text-sm underline">Varaa koeajo</div>
        </div>
        <div>
          <div className="mb-10 gap-5 md:gap-10 flex md:flex-row flex-col mx-5">
            <Link href="https://www.tesla.com/fi_fi/inventory/new/m3">
              <div className="bg-grey/80 text-white w-64 py-2 px-7 rounded hover:cursor-pointer">
                Varastoautot
              </div>
            </Link>
            <Link href="https://www.tesla.com/fi_fi/model3/design">
              <div className="text-grey bg-semiWhite/70 w-64 py-2 px-7 rounded hover:cursor-pointer">
                Suunnittele omasi
              </div>
            </Link>
          </div>
          <div className="text-xs font-light mb-4">
            Viiden tähden Euro NCAP -turvamerkintä
          </div>
        </div>
      </div>

      {/* MODEL S */}
      <div
        className="h-screen bg-cover bg-center text-center text-darkGrey items-center flex flex-col justify-between snap-start snap-always"
        id="models"

        style={{
          backgroundImage: 'url("assets/models.jpeg")',
        }}
      >
        <div className="pt-40">
          <div className="text-4xl font-medium">Model S</div>
        </div>
        <div>
          <div className="mb-16 gap-5 md:gap-10 flex md:flex-row flex-col mx-5">
            <Link href="https://www.tesla.com/fi_fi/inventory/new/m3">
              <div className="bg-grey/80 text-white w-64 py-2 px-7 rounded hover:cursor-pointer">
                Varastoautot
              </div>
            </Link>
            <Link href="https://www.tesla.com/fi_fi/model3/design">
              <div className="text-grey bg-semiWhite/70 w-64 py-2 px-7 rounded hover:cursor-pointer">
                Suunnittele omasi
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* MODEL X */}
      <div
        className="h-screen bg-cover bg-center text-center text-darkGrey items-center flex flex-col justify-between snap-start snap-always"
        id="modelx"

        style={{
          backgroundImage: 'url("assets/modelx.jpeg")',
        }}
      >
        <div className="pt-40">
          <div className="text-4xl font-medium">Model X</div>
        </div>
        <div>
          <div className="mb-16 gap-5 md:gap-10 flex md:flex-row flex-col mx-5">
            <Link href="https://www.tesla.com/fi_fi/inventory/new/m3">
              <div className="bg-grey/80 text-white w-64 py-2 px-7 rounded hover:cursor-pointer">
                Varastoautot
              </div>
            </Link>
            <Link href="https://www.tesla.com/fi_fi/model3/design">
              <div className="text-grey bg-semiWhite/70 w-64 py-2 px-7 rounded hover:cursor-pointer">
                Suunnittele omasi
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/*  HOUSE */}
      <div
        className="h-screen bg-cover bg-center text-center text-darkGrey items-center flex flex-col justify-between snap-start snap-always"
        id="house"

        style={{
          backgroundImage: 'url("assets/house.jpeg")',
        }}
      >
        <div className="pt-40 space-y-2">
          <div className="text-4xl font-medium">
            Aurinkoenergiaa ja Powerwall
          </div>
          <div className=" text-sm">Virtaa Kaikille</div>
        </div>
        <div>
          <div className="mb-16 flex mx-5">
            <Link href="https://www.tesla.com/fi_fi/inventory/new/m3">
              <div className="bg-gray-700/80 text-white w-64 py-2 px-7 rounded hover:cursor-pointer">
                Lue lisää
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* CHARGER */}
      <div
        className="h-screen bg-cover bg-center text-center text-darkGrey items-center flex flex-col justify-between snap-start snap-always"
        id="charger"
        style={{
          backgroundImage: 'url("assets/charger.jpeg")',
        }}
      >
        <div className="pt-40">
          <div className="text-4xl font-medium">Lisävarusteet</div>
        </div>
        <div>
          <div className="mb-10 flex mx-5 justify-center">
            <Link href="https://www.tesla.com/fi_fi/inventory/new/m3">
              <div className="bg-grey/80 text-white w-64 py-2 px-7 rounded hover:cursor-pointer">
                Osta nyt
              </div>
            </Link>
          </div>
          <div className="text-xs mb-4 flex gap-4 text-[#5c5e62]">
              <div>Tesla C 2023</div>
              <div>Tietosuoja ja lakiasiat</div>
              <div>Yhteystiedot</div>
              <div>Työpaikat</div>
              <div>Uutiset</div>
              <div>Sijainnit</div>
            </div>
        </div>
      </div>
    </div>
  );
}
