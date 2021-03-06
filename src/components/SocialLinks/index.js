import React from "react"

import Icons from "./Icons"
import links from "./content"

import * as S from "./styled"

const SocialLinks = ({ showOnMobile }) => {
    return (
        <S.SocialLinksWrapper>
            <S.SocialLinks showOnMobile={showOnMobile}>
                {links.map((link, i) => {
                    const Icon = Icons[link.label]

                    return (
                        <S.SocialLinksItem key={i}>
                            <S.SocialLinksLink
                                href={link.url}
                                title={link.label}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <S.IconWrapper>
                                    <Icon />
                                </S.IconWrapper>

                            </S.SocialLinksLink>
                        </S.SocialLinksItem>
                    )
                })}
            </S.SocialLinks>
        </S.SocialLinksWrapper>
    )
}

export default SocialLinks