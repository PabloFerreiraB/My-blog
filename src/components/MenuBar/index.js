import React, { useState, useEffect } from "react"

import { Home } from "@styled-icons/boxicons-solid/Home"
import { SearchAlt2 as Search } from "@styled-icons/boxicons-regular/SearchAlt2"
import { UpArrowAlt as Arrow } from "@styled-icons/boxicons-regular/UpArrowAlt"
import { Bulb as Light } from "@styled-icons/boxicons-regular/Bulb"
import { Grid } from "@styled-icons/boxicons-solid/Grid"
import { ListUl as List } from "@styled-icons/fa-solid/ListUl"
import { Menu } from '@styled-icons/remix-fill/Menu'

import getThemeColor from "../../utils/getThemeColor"

import * as S from "./styled"

import scrollToTop from '../../utils/scrollToTop';

const MenuBar = () => {
    const [theme, setTheme] = useState(null)
    const [display, setDisplay] = useState(null)

    const isDarkMode = theme === 'dark'
    const isListMode = display === "list"

    useEffect(() => {
        setTheme(window.__theme)
        setDisplay(window.__display)

        window.__onThemeChange = () => setTheme(window.__theme)
        window.__onDisplayChange = () => setDisplay(window.__display)
    }, [])

    const openMenu = () => {
        // setIsMenuOpen(!isMenuOpen)
    }

    return (
        <S.MenuBarWrapper>
            <S.MenuBarGroup>
                {/* Voltar para Home */}
                <S.MenuBarLink
                    to="/"
                    cover
                    direction="right"
                    bg={getThemeColor()}
                    duration={0.8}
                    title="Voltar para Home"
                >
                    <S.MenuBarItem>
                        <Home />
                    </S.MenuBarItem>
                </S.MenuBarLink>
                {/* Pesquisar */}
                <S.MenuBarLink
                    to="/search/"
                    cover
                    direction="right"
                    bg={getThemeColor()}
                    duration={0.8}
                    title="Pesquisar"
                >
                    <S.MenuBarItem>
                        <Search />
                    </S.MenuBarItem>
                </S.MenuBarLink>
            </S.MenuBarGroup>

            <S.MenuBarGroupMobile>
                <S.MenuBarGroup>
                    <S.MenuBarItem title="Abrir Menu" onClick={openMenu}>
                        <Menu />
                    </S.MenuBarItem>
                </S.MenuBarGroup>
            </S.MenuBarGroupMobile>

            <S.MenuBarGroup>
                {/* Mudar o tema */}
                <S.MenuBarItem title="Mudar o tema"
                    onClick={() => {
                        window.__setPreferredTheme(isDarkMode ? "light" : "dark")
                    }}
                    className={theme}
                >
                    <Light />
                </S.MenuBarItem>
                {/* Mudar visualização */}
                <S.MenuBarItem title="Mudar visualização"
                    onClick={() => {
                        window.__setPreferredDisplay(isListMode ? "grid" : "list")
                    }}
                    className={display}
                >
                    {isListMode ? <Grid /> : <List />}
                </S.MenuBarItem>
                {/* Ir para o Topo */}
                <S.MenuBarItem title="Ir para o Topo" onClick={scrollToTop}>
                    <Arrow />
                </S.MenuBarItem>
            </S.MenuBarGroup>
        </S.MenuBarWrapper>
    )
}

export default MenuBar