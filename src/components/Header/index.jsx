import React from "react";
import { Button, Select } from "antd";
import "./Header.less";
import { CustomButton } from "../CustomButton";
import { Link } from "react-router-dom";
import { routes } from "../../routes";

const { Option } = Select;

export const Header = () => {
  return (
    <header className="container header">
      <Link style={{ color: "#1d212a" }} to={routes.home}>
        <div className="logo">iTerms</div>
      </Link>
      <nav>
        <a href="" style={{ color: "#1D212A" }}>
          Generate
        </a>
        <a href="">Contact us</a>
        <a href="" style={{ color: "#1D212A" }}>
          Pricing
        </a>
        <a href="" style={{ color: "#1D212A" }}>
          Blog
        </a>
      </nav>
      <Select defaultValue="EN" style={{ width: 69 }}>
        <Option value="EN">EN</Option>
        <Option value="RU">RU</Option>
      </Select>
      <div>
        <Link to={routes.login}>
          <Button type="text">Log in</Button>
        </Link>
        <Link to={routes.sign_up}>
          <CustomButton primary>Sign up</CustomButton>
        </Link>
      </div>
    </header>
  );
};
