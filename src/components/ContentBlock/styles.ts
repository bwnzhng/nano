import { Row } from "antd";
import styled from "styled-components";

export const ContentSection = styled("section")`
  position: relative;
  padding: 3rem 0 5rem;

  @media only screen and (max-width: 1024px) {
    padding: 2rem 0 2rem;
  }
`;

export const Content = styled("p")`
  margin: 1.5rem 0 2rem 0;
`;

export const StyledRow = styled(Row)`
  flex-direction: ${({ direction }: { direction: string }) =>
    direction === "left" ? "row" : "row-reverse"};
`;

export const ContentWrapper = styled("div")`
  position: relative;
  max-width: 540px;

  @media only screen and (max-width: 575px) {
    padding-top: 4rem;
  }
`;

export const ServiceWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
`;

export const MinTitle = styled("h6")`
  font-size: 15px;
  line-height: 1rem;
  padding: 0.5rem 0;
  text-transform: uppercase;
  color: #000;
  font-family: "Motiva Sans Light", sans-serif;
`;

export const MinPara = styled("p")`
  font-size: 13px;
`;

export const ButtonWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;

  @media screen and (min-width: 1024px) {
    max-width: 80%;
  }

  button:last-child {
    margin-left: 20px;
  }
`;

export const SpecificationTable = styled("table")`
  width: 100%;
  margin-top: 2rem;
  border-collapse: collapse;
  font-size: 0.8rem;
  color: #434343;

  th,
  td {
    border: 1px solid #dfe5e8;
    padding: 0.6rem 0.45rem;
    text-align: left;
  }

  th {
    background: #2e186a;
    color: #fff;
    font-weight: 700;
  }

  tr:nth-child(even) td {
    background: #f6f8f9;
  }

  td:last-child {
    text-align: right;
  }

  @media only screen and (max-width: 575px) {
    font-size: 0.7rem;

    th,
    td {
      padding: 0.45rem 0.3rem;
    }
  }
`;
