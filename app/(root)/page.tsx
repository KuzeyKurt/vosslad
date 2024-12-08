import { Container } from "@/components/shared/container";
import { Filters } from "@/components/shared/filters";

import { Pagination } from "@/components/shared/pagination";
import { ProductsGroupList } from "@/components/shared/products-group-list";
import { Stories } from "@/components/shared/stories";
import { Title } from "@/components/shared/title";
import { TopBar } from "@/components/shared/top-bar";
import { GetSearchParams, findPizzas } from "@/lib/find-pizzas";
import Image from 'next/image';


export default async function HomePage({
  searchParams,
}: {
  searchParams:  Promise<GetSearchParams>;
}) {
  const [categoryProducts, meta] = await findPizzas(await searchParams);

  return (
    <>
      <Container className="mt-5">
        {/* <Title text="Все пиццы" size="lg" className="font-extrabold" /> */}
      </Container>

      <TopBar
        categories={categoryProducts.filter((c) => c.products.length > 0)}
      />

      {/* <Stories /> */}

      <Container className="pb-14">
        <div className="flex gap-[60px]">
          {/* <div className="w-[250px]"><Filters /></div> */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              {categoryProducts.map(
                (category) =>
                  category.products.length > 0 && (
                    <ProductsGroupList
                      key={category.id}
                      title={category.name}
                      products={category.products}
                      categoryId={category.id}
                    />
                  )
              )}
            </div>

            <div className="flex items-center gap-6 mt-12">
              {/* <Pagination
                pageCount={meta.pageCount}
                currentPage={meta.currentPage}
              /> */}
              {/* <span className="text-sm text-gray-400">5 из 65</span> */}
            </div>
          </div>
        </div>
      </Container>

      <div className="bg-[#333333] h-[350px]"></div>
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
                <div className="text">info@sherbetgroup.ru</div>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
