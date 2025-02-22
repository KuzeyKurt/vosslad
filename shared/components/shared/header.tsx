"use client";

import { cn } from "@/shared/lib/utils";
import React from "react";
import { Container } from "./container";
import Image from "next/image";
import Link from "next/link";
import { SearchInput } from "./search-input";
import { CartButton } from "./cart-button";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import { ProfileButton } from "./profile-button";
import { AuthModal } from "./modals";
import { Session } from "node:inspector/promises";

interface Props {
  hasSearch?: boolean;
  hasCart?: boolean;
  className?: string;
}

export const Header: React.FC<Props> = ({
  hasSearch = true,
  hasCart = true,
  className,
}) => {
  const router = useRouter();
  const [openAuthModal, setOpenAuthModal] = React.useState(false);

  const searchParams = useSearchParams();

  React.useEffect(() => {
    let toastMessage = "";

    // Проверка, что searchParams действительно существует
    if (searchParams && searchParams.has("paid")) {
      toastMessage = "Заказ успешно оплачен! Информация отправлена на почту.";
    }

    if (searchParams && searchParams.has("verified")) { // добавлена проверка
      toastMessage = "Почта успешно подтверждена!";
    }

    if (toastMessage) {
      setTimeout(() => {
        router.replace("/");
        toast.success(toastMessage, {
          duration: 3000,
        });
      }, 1000);
    }
  }, []);

  return (
    <header className={cn("border-b border-gray-100", className)}>
      <Container className="flex items-center justify-between py-8">
        <Link href="/">
          <div className="flex items-center gap-4">
            <Image src="/sherbet.png" width={200} height={110} alt="Logo" />
            <div>
              {/* <h1 className="text-2xl uppercase font-black">Next Pizza</h1> */}
              {/* <p className="text-sm text-gray-400 leading-3">вкусней уже некуда</p> */}
            </div>
          </div>
        </Link>
        <nav className="menu2">
          <ul className="topmenu">
            <li>
              <a className="top1 top" href="/sherbet/aboutus">
                О НАС
              </a>
            </li>
            <li>
              <a className="top2  submenu-link" href="/sherbet/store">
                МАГАЗИН
              </a>
            </li>
            <li>
              <a className="top3 submenu-link" href="/sherbet/contacts">
                КОНТАКТЫ
              </a>
            </li>
          </ul>
        </nav>

        {/* {hasSearch && (
          <div className="mx-10 flex-1">
            <SearchInput />
          </div>
        )} */}

        <div className="flex items-center gap-3">
          <AuthModal
            open={openAuthModal}
            onClose={() => setOpenAuthModal(false)}
          />

          <ProfileButton onClickSignIn={() => setOpenAuthModal(true)} />

          {hasCart && <CartButton />}
        </div>
      </Container>
    </header>
  );
};
