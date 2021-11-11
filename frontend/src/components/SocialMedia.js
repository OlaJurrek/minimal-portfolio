import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import FacebookIcon from '../assets/images/facebook.svg';
import TwitterIcon from '../assets/images/twitter.svg';
import InstagramIcon from '../assets/images/instagram.svg';

const StyledSocialMedia = styled.ul`
  display: flex;
`;

const SocialMediaIcon = styled.a`
  display: inline-block;
  margin-right: 20px;
  color: ${({ theme }) => theme.colors.gray_400};

  &:hover {
    opacity: 0.7;
  }
`;

export default function SocialMedia() {
  const data = useStaticQuery(graphql`
    query {
      allStrapiSocial {
        nodes {
          isActive
          link
          name
        }
      }
    }
  `);

  const socials = data.allStrapiSocial.nodes.map(function (item) {
    switch (item.name) {
      case 'facebook':
        item = { ...item, icon: <FacebookIcon /> };
        break;
      case 'twitter':
        item = { ...item, icon: <TwitterIcon /> };
        break;
      case 'instagram':
        item = { ...item, icon: <InstagramIcon /> };
        break;
    }
    return item;
  });

  return (
    <StyledSocialMedia>
      {socials.map(item => {
        if (item.isActive) {
          return (
            <li key={item.name}>
              <SocialMediaIcon href={item.link}>{item.icon}</SocialMediaIcon>
            </li>
          );
        }
      })}
    </StyledSocialMedia>
  );
}
