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
  margin-right: 24px;
  color: ${({ theme }) => theme.colors.gray_450};

  &:focus {
    // może jakiś component link zrobić, który będzie miał te style i tylko go rozszerzać?
    outline: 2px solid ${({ theme }) => theme.colors.blue_600};
    outline-offset: 3px;
  }

  &:hover {
    opacity: 0.75;
  }
`;

export default function SocialMedia() {
  const data = useStaticQuery(graphql`
    query {
      allStrapiSocial {
        nodes {
          alternativeText
          isActive
          link
          name
        }
      }
    }
  `);

  const socials = data.allStrapiSocial.nodes
    .filter(item => item.isActive)
    .map(item => {
      if (item.link.includes('facebook')) {
        item = { ...item, icon: <FacebookIcon /> };
      } else if (item.link.includes('twitter')) {
        item = { ...item, icon: <TwitterIcon /> };
      } else if (item.link.includes('instagram')) {
        item = { ...item, icon: <InstagramIcon /> };
      }
      return item;
    });

  return (
    <StyledSocialMedia>
      {socials.map(item => (
        <li key={item.name}>
          <SocialMediaIcon href={item.link}>
            {item.icon}
            <span className="visually-hidden">{item.alternativeText}</span>
          </SocialMediaIcon>
        </li>
      ))}
    </StyledSocialMedia>
  );
}
