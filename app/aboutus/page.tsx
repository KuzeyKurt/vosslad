import type { Metadata } from "next";
import { Header } from "@/components/shared/header";
import Image from "next/image";
import AboutLayout from "./layout";

export const metadata: Metadata = {
  title: "Sherbet | О нас",
  description: "Магазин восточных сладостей",
};

const AboutUsPage = () => {
  return (
    <AboutLayout>
    
      <div>
        <Header />
        <h1>About Us</h1>
        <main className="min-h-screen bg-[#404040]">
       {/* { <Image src="/sherbet.png" width={200} height={200} alt="Logo" /> } */}
     
      <div className="id1">
         <Image
          className="back"
          src="/back.png"
          width={1920}
          height={854}
          alt="Logo"
        />

        <h1>Фабрика восточных сладостей</h1>
        <hr className="hr1"></hr>
        <h2>
          Компания успешна настолько, насколько успешны работающие в ней люди.
        </h2>
        <div className="hr2"></div>
        <Image
          className="back2"
          src="/aboutus/potyok.png"
          width={1000}
          height={1000}
          alt="Logo"
        />
      </div>

      <div className="block2">
        <Image
          className="txtback"
          src="/aboutus/backtxt.png"
          width={1000}
          height={1000}
          alt="Logo"
        />
        <p className="txt1"></p>
        <p className="txt2"></p>
        <p className="txt3"></p>
      </div>

      <div className="block3">
        <Image
          className="bl3back"
          src="/aboutus/bl3back.png"
          width={1000}
          height={1000}
          alt="Logo"
        />
        <div className="txt">
          <h2>Шербет сегодня:</h2>
          <hr></hr>
          <div>
            Узнаваемая торговая марка. Широкий ассортимент продукции. Гибкая
            ценовая политика. Индивидуальность упаковки. Мотивация, консультация
            заказчиков. Рекламное сопровождение партнеров. Взаимовыгодное
            сотрудничество. Собственная доставка и логистика.
          </div>
          <hr></hr>
        </div>
      </div>
      <div className="block4">
        <Image
          className="bl4back"
          src="/aboutus/bl4back.png"
          width={1000}
          height={1000}
          alt="Logo"
        />
      </div>

      <div className="block5">
        <Image
          className="bl5back"
          src="/aboutus/pahlava.png"
          width={1000}
          height={1000}
          alt="Logo"
        />
        <div className="txt-pahava">
<h2>Турецкая пахлава</h2>
<p>В недавном прошлом, привилегия исключительно турецких султанов и свиты, в нынежнее же время этот прекрасный десерт имеет широкое распространение во всем мире.</p>
</div>
      </div>





      <div className="block6">
        <Image
          className="bl6back"
          src="/aboutus/lokum.png"
          width={1000}
          height={1000}
          alt="Logo"
        />
         <div className="txt-rahat">
<h2>Рахат-лукум</h2>
<p>Сладость, которую готовят из воды, сахара и крахмала, с добавлением эссенции из лепестков роз, существует уже более 500 лет. </p>
</div>
      </div>

      <div className="block7">
        <Image
          className="bl7back"
          src="/aboutus/halva.png"
          width={1000}
          height={1000}
          alt="image"
        />
        <div className="txt-pahava">
<h2>Халва</h2>
<p>Сегодня халва считается популярной сладостью и во многих странах мира. В состав восточной сладости входит множество различных витаминов и микроэлементов.</p>
</div>
      </div>

      
      

      <footer>
        <Image
          className="backfoot"
          src="/aboutus/footer/back.png"
          width={1000}
          height={1000}
          alt="image"
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
            alt="image"
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
              alt="image"
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
                  alt="image"
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
                  alt="image"
                />
                <div className="text">info@sherbetgroup.ru</div>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
      </div>
    </AboutLayout>
  );
};

export default AboutUsPage;

// export default function AboutusPage({}: //   children,
// //   modal,
// Readonly<{
//   children: React.ReactNode;
//   modal: React.ReactNode;
// }>) {
//   return (
//     <main className="min-h-screen bg-[#404040]">
//       {/* <Image src="/sherbet.png" width={200} height={200} alt="Logo" /> */}
//       {/* <Header /> */}
//       <div className="id1">
//         <Image
//           className="back"
//           src="/back.png"
//           width={1920}
//           height={854}
//           alt="Logo"
//         />

//         <h1>Фабрика восточных сладостей</h1>
//         <hr className="hr1"></hr>
//         <h2>
//           Компания успешна настолько, насколько успешны работающие в ней люди.
//         </h2>
//         <div className="hr2"></div>
//         <Image
//           className="back2"
//           src="/aboutus/potyok.png"
//           width={1000}
//           height={1000}
//           alt="Logo"
//         />
//       </div>

//       <div className="block2">
//         <Image
//           className="txtback"
//           src="/aboutus/backtxt.png"
//           width={1000}
//           height={1000}
//           alt="Logo"
//         />
//         <p className="txt1"></p>
//         <p className="txt2"></p>
//         <p className="txt3"></p>
//       </div>

//       <div className="block3">
//         <Image
//           className="bl3back"
//           src="/aboutus/bl3back.png"
//           width={1000}
//           height={1000}
//           alt="Logo"
//         />
//         <div className="txt">
//           <h2>Шербет сегодня:</h2>
//           <hr></hr>
//           <div>
//             Узнаваемая торговая марка. Широкий ассортимент продукции. Гибкая
//             ценовая политика. Индивидуальность упаковки. Мотивация, консультация
//             заказчиков. Рекламное сопровождение партнеров. Взаимовыгодное
//             сотрудничество. Собственная доставка и логистика.
//           </div>
//           <hr></hr>
//         </div>
//       </div>
//       <div className="block4">
//         <Image
//           className="bl4back"
//           src="/aboutus/bl4back.png"
//           width={1000}
//           height={1000}
//           alt="Logo"
//         />
//       </div>

//       <div className="block5">
//         <Image
//           className="bl5back"
//           src="/aboutus/pahlava.png"
//           width={1000}
//           height={1000}
//           alt="Logo"
//         />
//       </div>

//       <div className="block6">
//         <Image
//           className="bl6back"
//           src="/aboutus/lokum.png"
//           width={1000}
//           height={1000}
//           alt="Logo"
//         />
//       </div>

//       <div className="block7">
//         <Image
//           className="bl7back"
//           src="/aboutus/lokum.png"
//           width={1000}
//           height={1000}
//         />
//       </div>

//       <footer>
//         <Image
//           className="backfoot"
//           src="/aboutus/footer/back.png"
//           width={1000}
//           height={1000}
//         />
//         {/* <Image src="/sherbet.png" width={250} height={250} /> */}
//         {/* <Image
//           className="logofoot"
//           src="/sherbet.png"
//           width={1000}
//           height={1000}
//         /> */}
//         <h2 className="txtfoot">Фабрика восточных сладостей</h2>
//         <div className="footer">
//           <Image
//             className="geo"
//             src="/aboutus/footer/geo.png"
//             width={1000}
//             height={1000}
//           />
//           <div className="spgeo">
//             <p>Центральный офис:</p>
//             <p>Республика Крым</p>
//             <p>г. Симферополь</p>
//           </div>
//           <div className="teldiv">
//             <Image
//               className="tel"
//               src="/aboutus/footer/tel.png"
//               width={1000}
//               height={1000}
//             />
//             <div className="numb">
//               <p>+7(978) 729 26 57</p>
//               <p>+7(978) 214 21 55</p>
//             </div>
//           </div>

//           <div className="ssilky">
//             <div className="ainst">
//               <a href="#">
//                 <Image
//                   className="inst"
//                   src="/aboutus/footer/inst.png"
//                   width={1000}
//                   height={1000}
//                 />
//                 <div className="text">tm_sherbet</div>
//               </a>
//             </div>
//             <div className="amail">
//               <a className="amail" href="#">
//                 <Image
//                   className="mail"
//                   src="/aboutus/footer/mail.png"
//                   width={1000}
//                   height={1000}
//                 />
//                 <div className="text">info@sherbetgroup.ru</div>
//               </a>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </main>
//   );
// }
