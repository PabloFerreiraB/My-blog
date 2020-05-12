import React from "react"
import propTypes from "prop-types"

import getThemeColor from "../../utils/getThemeColor"

import * as S from "./styled"

const RecommendedPosts = ({ next, previous }) => (
    <S.RecommendedWrapper>
        {previous && (
            <S.RecommendedLink
                cover
                direction="left"
                bg={getThemeColor()}
                duration={0.8}
                to={previous.fields.slug}
                className="previous"
            >
                {previous.frontmatter.title}
            </S.RecommendedLink>
        )}
        {next && (
            <S.RecommendedLink
                cover
                direction="right"
                bg={getThemeColor()}
                duration={0.8}
                to={next.fields.slug}
                className="next"
            >
                {next.frontmatter.title}
            </S.RecommendedLink>
        )}
    </S.RecommendedWrapper>
)

RecommendedPosts.propTypes = {
    next: propTypes.shape({
        frontmatter: propTypes.shape({
            title: propTypes.string
        }),
        fields: propTypes.shape({
            title: propTypes.string
        })
    }),
    previous: propTypes.shape({
        frontmatter: propTypes.shape({
            title: propTypes.string
        }),
        fields: propTypes.shape({
            title: propTypes.string
        })
    }),
}

export default RecommendedPosts