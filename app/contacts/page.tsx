import type { Metadata } from "next";
import { Header } from "@/components/shared/header";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Sherbet | Контакты",
  description: "Магазин восточных сладостей",
};

export default function ContactPage(){ //   children,

  return (
    <main className="min-h-screen bg-[#404040]">
      <Header />
      <div className="id1">
        <Image
          className="back"
          src="/back.png"
          width={1920}
          height={854}
          alt="Logo"
        />
        <h1>Фабрика восточных сладостей</h1>
        <div id="hr1"></div>
        <h2>
          Компания успешна настолько, насколько успешны работающие в ней люди.
        </h2>
        <div id="hr2"></div>
        <Image
          className="back2"
          src="/aboutus/potyok.png"
          width={1920}
          height={854}
          alt="Logo"
        />
        
      </div>

      <div className="id2">
        <Image
          className="bl4back"
          src="/info.png"
          width={1000}
          height={1000}
          alt = "image"
        />
        {/* <h2 className="txt1">
          Центральный офис:<p></p>Республика Крым г.Симферополь.
        </h2>
        <div className="txt2">
          <p>тел.: +7 (978) 729 26 57;</p>
          <p>+7 (978) 729 26 53;</p>
          <p>+7 (978) 729 26 52</p>
        </div>
        <div className="amail">
          <a className="amail" href="#">
            <Image
              className="mail"
              src="/aboutus/footer/mail.png"
              width={1000}
              height={1000}
              alt="Logo"
            />
            <div className="text">info@sherbetgroup.ru</div>
          </a>
        </div>

        <div className="bl1ainst">
          <a href="#">
            <Image
              className="mail"
              src="/aboutus/footer/inst.png"
              width={1000}
              height={1000}
              alt="Logo"
            />
            <div className="bl1text">tm_sherbet</div>
          </a>
        </div> */}

        <div className="id3">
          {/* <Image
            className="back4"
            src="/aboutus/contacts/back4.png"
            width={1000}
            height={1000}
          
          /> */}
          {/* <div className="txt4">
            <p>Москва:</p>
            <p>тел: +7 (985) 104 00 02;</p>
            <p>+7 (985) 106 08 08</p>\
          </div>
          <div className="mail">
            <a className="mail" href="#">
              <Image
                className="mail"
                src="/aboutus/footer/mail.png"
                width={1000}
                height={1000}
                alt="Logo"
              />
              <div className="bl4text">info.msk@sherbetgroup.ru</div>
            </a>
          </div> */}
          <div className="id2">
        <Image
          className="bl3back"
          src="/info2.png"
          width={1000}
          height={1000}
          alt = "image"
        /></div>
        </div>
      </div>

      <footer>
        <Image
          className="backfoot"
          src="/aboutus/footer/back.png"
          width={1000}
          height={1000}
          alt="Logo"
        />
        {/* <Image src="/sherbet.png" width={250} height={250} /> */}
        {/* <Image
          className="logofoot"
          src="/sherbet.png"
          width={1000}
          height={1000}
        /> */}
        <h2 className="txtfoot">Фабрика восточных сладостей</h2>
        <div className="footer">
          <Image
            className="geo"
            src="/aboutus/footer/geo.png"
            width={1000}
            height={1000}
            alt="Logo"
          />
          <div className="spgeo">
            <p>Центральный офис:</p>
            <p>Республика Крым</p>
            <p>г. Симферополь</p>
          </div>
          <div className="teldiv">
            <Image
              className="tel"
              src="/aboutus/footer/tel.png"
              width={1000}
              height={1000}
              alt="Logo"
            />
            <div className="numb">
              <p>+7(978) 729 26 57</p>
              <p>+7(978) 214 21 55</p>
            </div>
          </div>

          <div className="ssilky">
            <div className="ainst">
              <a href="#">
                <Image
                  className="inst"
                  src="/aboutus/footer/inst.png"
                  width={1000}
                  height={1000}
                  alt="Logo"
                />
                <div className="text">tm_sherbet</div>
              </a>
            </div>
            <div className="amail">
              <a className="amail" href="#">
                <Image
                  className="mail"
                  src="/aboutus/footer/mail.png"
                  width={1000}
                  height={1000}
                  alt="Logo"
                />
                <div className="text">info@sherbetgroup.ru</div>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
