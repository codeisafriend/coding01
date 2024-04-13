import Image from "next/image";

import logoImage from "@/public/images/logo.svg";
import mainvisualImage from "@/public/images/mainvisual.jpg";
import aboutImage from "@/public/images/about.jpg";
import bicycle1Image from "@/public/images/bicycle1.jpg";
import bicycle2Image from "@/public/images/bicycle2.jpg";
import bicycle3Image from "@/public/images/bicycle3.jpg";

export default function Home() {
  return (
    <>
      {/* <header className="max-w-[960px] flex justify-between p-[2%] mr-[auto] ml-[auto]">
        <h1>
          <Image
            src={logoImage}
            alt="ロゴ画像"
            className="w-[100%] h-10 align-bottom"
            priority
          />
        </h1>
        <nav>
          <ul className="flex justify-center justify-items-center">
            <li className="pr-10">About</li>
            <li>Bicycle</li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="mb-16">
          <div className="w-[100%]">
            <Image
              src={mainvisualImage}
              alt="mainvisual 壁に立てかけられた自転車"
              className="max-w-full h-[600px] align-bottom object-cover"
              priority
            />
          </div>
        </section>
        <section className="max-w-[960px] text-[#383E45] px-[4%]">
          <h2 className="font-bold text-3xl text-center mb-16">About</h2>
          <div className="flex flex-col justify-center items-center">
            <div className="w-[100%]">
              <Image
                src={aboutImage}
                alt="KAKERU MIYAICHIさんを彷彿とさせる抽象的人物"
                className="max-w-full w-[100px] h-[100px] align-bottom mr-[auto] ml-[auto] rounded-[50%]"
                priority
              />
            </div>
            <div className="text-left mr-[auto] ml-[auto] flex">
              <h3 className="font-bold text-base my-3">KAKERU MIYAICHI</h3>
              <p className="text-sm">
                テキストテキストテキストテキストテキストテキストテキスト
                テキストテキストテキストテキストテキストテキストテキスト
                テキストテキストテキストテキストテキストテキストテキスト
              </p>
            </div>
          </div>
        </section>
        <section className="max-w-[960px] text-[#383E45] p-[4%] mr-[auto] ml-[auto]">
          <h2 className="font-bold text-3xl text-center">Bicycle</h2>
          <div>
            <Image src={bicycle1Image} alt="自転車1" priority />
            <h3>タイトルタイトル</h3>
            <p>テキストテキストテキスト</p>
          </div>
          <div>
            <Image src={bicycle2Image} alt="自転車2" priority />
            <h3>タイトルタイトル</h3>
            <p>テキストテキストテキスト</p>
          </div>
          <div>
            <Image src={bicycle3Image} alt="自転車3" priority />
            <h3>タイトルタイトル</h3>
            <p>テキストテキストテキスト</p>
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; 2020 Profile</p>
      </footer> */}

      <header className="w-[100%]">
        <div className="flex p-4 items-center justify-between max-w-[960px] mr-[auto] ml-[auto]">
          <h1>
            <Image
              src={logoImage}
              alt="ロゴ画像"
              className="w-[100%] h-10 align-bottom"
              priority
            />
          </h1>
          <nav className="">
            <ul className="flex text-[#24292E]">
              <li>About</li>
              <li className="pl-6">Bicycle</li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <section className="h-[600px] block relative w-[100%]">
          <div className="w-[100%]">
            <Image
              src={mainvisualImage}
              alt="mainvisual 壁に立てかけられた自転車"
              className="max-w-full h-[600px] align-bottom object-cover"
              priority
            />
          </div>
        </section>
        <section className="w-[96%] max-w-[960px] pt-24 mr-[auto] ml-[auto] px-[2%]">
          <h2 className="text-center text-4xl font-bold text-[#383E45] relative after:content-[''] after:-top-0 after:left-0 after:border-b after:border-gray-900 pb-24">
            About
          </h2>

          <div className="sm:flex">
            <Image
              src={aboutImage}
              alt="KAKERU MIYAICHIさんを彷彿とさせる抽象的人物"
              width={100}
              height={100}
              className="w-[100px] h-[100px] object-cover rounded-[50%] mr-[auto] ml-[auto]"
            />
            <div className="text-[#383E45]">
              <h3 className="text-xl font-bold py-3">KAKERU MIYAICHI</h3>

              <p className="text-sm">
                テキストテキストテキストテキストテキストテキストテキスト
              </p>
              <p className="text-sm">
                テキストテキストテキストテキストテキストテキストテキスト
              </p>
              <p className="text-sm">
                {" "}
                テキストテキストテキストテキストテキストテキストテキスト
              </p>
            </div>
          </div>
        </section>
        <section className="w-[96%] max-w-[960px] pt-24 mr-[auto] ml-[auto] px-[2%]">
          <h2 className="text-center text-4xl font-bold text-[#383E45] relative after:content-[''] after:-top-0 after:left-0 after:border-b after:border-gray-900 pb-24">
            Bicycle
          </h2>
          <div className="sm:flex">
            <div>
              <Image
                src={bicycle1Image}
                alt="自転車1"
                width={600}
                height={300}
              />
              <h3 className="text-center pt-3 font-semibold text-[#383E45]">
                タイトルタイトル
              </h3>
              <p className="text-center pt-4 text-sm text-[#383E45]">
                テキストテキストテキスト
              </p>
            </div>
            <div className="sm:ml-3">
              <Image
                src={bicycle2Image}
                alt="自転車2"
                width={600}
                height={300}
                className="mt-9 sm:mt-0"
              />
              <h3 className="text-center pt-3 font-semibold text-[#383E45]">
                タイトルタイトル
              </h3>
              <p className="text-center pt-4 text-sm text-[#383E45]">
                テキストテキストテキスト
              </p>
            </div>
            <div className="sm:ml-3">
              <Image
                src={bicycle3Image}
                alt="自転車3"
                width={600}
                height={300}
                className="mt-9 sm:mt-0"
              />
              <h3 className="text-center pt-3 font-semibold text-[#383E45]">
                タイトルタイトル
              </h3>
              <p className="text-center pt-4 text-sm text-[#383E45]">
                テキストテキストテキスト
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="mt-48 max-w-[960px] pt-24 mr-[auto] ml-[auto]">
        <p className="text-center text-[0.65rem]">&copy; 2020 Profile</p>
      </footer>
    </>
  );
}
