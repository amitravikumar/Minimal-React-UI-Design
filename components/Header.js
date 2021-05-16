import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Logo = styled.h1`
  font-size: 3.5rem;
  margin-left: 2rem;
  position: center;
  z-index: 2;
  background: red;
  transform: skew(-7deg);
  Link {
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    padding: 0.5rem 1rem;
  }
`;

const HeaderStyles = styled.header`
  .bar {
    border-bottom: 10px solid black;
    display: flex;
    flex-direction: column;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: center;
  }
`;

const Header = () => {
  return (
    <section
      className="fdb-block p-2"
      id="navigator"
      styles={{ margin: "0 auto" }}
    >
      <HeaderStyles>
        <div className="bar">
          <Link
            style={{
              textDecoration: "none",
              cursor: "pointer",
              color: "white"
            }}
            to="/"
          >
            <Logo
              style={{
                textAlign: "center"
              }}
            >
              Minimal UI
            </Logo>
          </Link>
        </div>
      </HeaderStyles>
    </section>
  );
};

export default Header;
