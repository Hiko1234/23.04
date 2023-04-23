import React from "react";
import Link from "next/link";

// import components
import Basket from "@/components/basket/Basket";
import Nav from "@/components/navigation/Nav";
import Search from "@/components/search/Search";
import Container from "@/components/container/Container";
// import styles
import s from "./Header.module.scss";

const header = () => {
  return (
    <>
      <header className={s.header}>
        <Container>
          <div className={s.header__body}>
            <div className={s.header__logo}>
              <h1>eShop</h1>
            </div>
            <Search />
            <div className={s.header__nav}>
              <Nav />
              <Basket />
            </div>
          </div>
        </Container>
      </header>
    </>
  );
};

export default header;
