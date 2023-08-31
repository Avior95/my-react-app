import React, { useState } from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";

const StyledButton = styled.button`
  background-color: #ffbf9b;
  color: grey;
  border: 1px solid black;
  border-radius: 20px;
  padding: 5px 20px;
  cursor: pointer;
  margin-right: 10px;
  font-weight: bold;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ffdecb;
  }
`;

const StyledInputWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
`;

const StyledInput = styled.input`
  border: none;
  outline: none;
  border-radius: 20px;
  padding: 5px 30px; /* Adjust padding for the icon */
  width: 100%;
`;

const SearchIconWrapper = styled.div`
  position: absolute;
  top: 50%;
  right: 0px;
  transform: translateY(-50%);

  width: 30px;
  height: 27px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0 20px 20px 0;
  cursor: pointer;
  color: grey;

  &:hover {
    background-color: #d9d9d9;
  }
`;

const Header = ({ setFilterByCategory, setFilterByTitle, filterByTitle }) => {
  const [searchClicked, setSearchClicked] = useState(false);

  const handleSearchClick = () => {
    setSearchClicked(true);
  };

  return (
    <header style={{ backgroundColor: "#FFBF9B", padding: "10px 0" }}>
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginLeft: "200px",
          }}
        >
          <StyledButton onClick={() => setFilterByCategory("all")}>
            All
          </StyledButton>
          <StyledButton onClick={() => setFilterByCategory("men's clothing")}>
            Men
          </StyledButton>
          <StyledButton onClick={() => setFilterByCategory("women's clothing")}>
            Women
          </StyledButton>
          <StyledButton onClick={() => setFilterByCategory("jewelery")}>
            Jewelry
          </StyledButton>
          <StyledButton onClick={() => setFilterByCategory("electronics")}>
            Electronics
          </StyledButton>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginRight: "200px",
          }}
        >
          <StyledInputWrapper>
            <StyledInput
              onChange={(ev) => setFilterByTitle(ev.target.value)}
              type="text"
              placeholder="Search..."
              value={filterByTitle}
            />
            <SearchIconWrapper onClick={handleSearchClick}>
              <SearchIcon />
            </SearchIconWrapper>
          </StyledInputWrapper>
        </div>
      </nav>
    </header>
  );
};

export default Header;
