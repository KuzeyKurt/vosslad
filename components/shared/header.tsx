"use client";

import React from "react";
import Image from "next/image";

import { Container } from "./container";
import { SearchInput } from "./search-input";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { CartButton } from "./cart-button";
import { AuthModal } from "./modals/auth-modal";
import { ProfileButton } from "./profile-button";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";

interface Props {
  hasSearch?: boolean;
  hasCart?: boolean;
  className?: string;
}

export const Header: React.FC<Props> = ({
  className,
  hasSearch = true,
  hasCart = true,
}) => {
  const [openAuthModal, setOpenAuthModal] = React.useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();

  React.useEffect(() => {
    let toastMessage = "";

    if (searchParams && searchParams.has("verified")) {
      toastMessage = "Почта успешно подтверждена!";
    }

    if (searchParams && searchParams.has("paid")) {
      toastMessage = "Заказ успешно оплачен! Информация отправлена на почту.";
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

  const onClickOpenAuthModal = () => setOpenAuthModal(true);

  return (
    <header className={cn("border-b border-gray-100", className)}>
      <Container className="flex items-center justify-between py-8">
        <Link href="/">
          <div className="flex items-center gap-4">
            <Image
              className="sherbet"
              src="/sherbet.png"
              width={200}
              height={110}
              alt="Logo"
            />
            <div></div>
          </div>
        </Link>
        <nav className="menu2">
          <ul className="topmenu">
            <li>
              <a className="top1 top" href="/aboutus">
                О НАС
              </a>
            </li>
            <li>
              <a className="top2  submenu-link" href="/">
                МАГАЗИН
              </a>
            </li>
            <li>
              <a className="top3 submenu-link" href="/contacts">
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
          <AuthModal open={openAuthModal} onClose={onClickOpenAuthModal} />

          <ProfileButton onClickOpenModal={onClickOpenAuthModal} />

          {hasCart && <CartButton />}
        </div>
      </Container>
    </header>
  );
};
