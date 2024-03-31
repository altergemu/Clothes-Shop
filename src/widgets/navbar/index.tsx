import { Box, HStack, IconButton } from "@chakra-ui/react";
import { Link } from "@remix-run/react";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { Logo } from "@/shared";
import style from "./index.module.scss";

type Navlink = {
  label: string;
  href: string;
  children?: Navlink[];
};

export function Navbar({ isSticky }: { isSticky?: boolean }) {
  const navlinks4: Navlink[] =
    "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit Similique Vel Amet Distinctio Perspiciatis Beatae"
      .split(" ")
      .map((v) => ({ label: v, href: "/" }));
  const navlinks3: Navlink[] =
    "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit Similique Vel Amet Distinctio Perspiciatis Beatae"
      .split(" ")
      .map((v) => ({ label: v, href: "/", children: navlinks4 }));
  const navlinks2: Navlink[] =
    "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit Similique Vel Amet Distinctio Perspiciatis Beatae"
      .split(" ")
      .map((v) => ({ label: v, href: "/", children: navlinks3 }));
  const navlinks: Navlink[] = "Женщинам Мужчинам Детям"
    .split(" ")
    .map((v) => ({ label: v, href: "/", children: navlinks2 }));

  const [menuPath, setMenuPath] = useState([0]);
  const menuPathVals: Navlink[] = [];
  menuPathVals[0] = navlinks[menuPath[0]];
  for (let i = 1; i < menuPath.length; i++)
    menuPathVals.push(menuPathVals[i - 1]!.children![menuPath[i]]);

  return (
    <>
      <Box className={style.navbar} position={isSticky ? "sticky" : undefined}>
        <Box
          display={"flex"}
          placeItems={"center"}
          height={"64px"}
          onMouseOver={() => setMenuPath((v) => [v[0]])}
          onFocus={undefined}
        >
          <Box width={"33.3%"} className={style.tabs} borderBottom={"none"}>
            {navlinks.map((v, i) => (
              <Link
                to={v.href}
                className={`${style.tab} ${menuPath[0] == i && style.active}`}
                key={i}
                onMouseOver={() => setMenuPath([i])}
                onFocus={() => setMenuPath([i])}
              >
                {v.label}
              </Link>
            ))}
          </Box>
          <Box width={"33.3%"} justifyContent={"flex-center"}>
            <Logo />
          </Box>
          <HStack width={"33.3%"} justifyContent={"flex-end"}>
            <IconButton aria-label={"Search"}>
              <BiSearch />
            </IconButton>
          </HStack>
        </Box>
        <Box className={style.tabs} justifyContent={"space-between"}>
          {navlinks[menuPath[0]]!.children!.map((v, i) => (
            <Link
              to={v.href}
              className={`${style.tab} ${menuPath[1] == i && style.active}`}
              key={i}
              onMouseOver={() => setMenuPath((v) => [v[0], i, 0])}
              onFocus={() => setMenuPath((v) => [v[0], i, 0])}
            >
              {v.label}
            </Link>
          ))}
        </Box>
      </Box>
      {menuPathVals[1] && menuPathVals[1].children && (
        <Box className={style.navmenu}>
          <Box display={"flex"} flexDir={"column"} flexWrap={"wrap"}>
            {menuPathVals[1].children!.map((v, i) => (
              <Link
                to={v.href}
                className={`${style.tab} ${style.activable}`}
                key={i}
              >
                {v.label}
              </Link>
            ))}
          </Box>
        </Box>
      )}
    </>
  );
}
