import React from "react";
import { graphql } from "gatsby";
import Box from "@mui/material/Box";
import Tests from "../view/Testy/test";
import Container from "../components/Container copy";
export const query = graphql`
  query TestTemplateQuery($id: String!) {
    test: sanityTest(id: { eq: $id }) {
      id
      box {
        cs
      }
      name {
        cs
      }
      exercise {
        question {
          cs
        }
        _rawText(resolveReferences: { maxDepth: 5 })
      }
    }
  }
`;

const Test = (props) => {
  const { data, errors } = props;
  const test = data && data.test;
  return (
    <Box
      sx={{
        backgroundColor: "#F1F1F1",
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cdefs%3E%3ClinearGradient id='a' x1='0' x2='0' y1='1' y2='0'%3E%3Cstop offset='0' stop-color='%230FF'/%3E%3Cstop offset='1' stop-color='%23CF6'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' x1='0' x2='0' y1='0' y2='1'%3E%3Cstop offset='0' stop-color='%23F00'/%3E%3Cstop offset='1' stop-color='%23FC0'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg fill='%23FFF' fill-opacity='0' stroke-miterlimit='10'%3E%3Cg stroke='url(%23a)' stroke-width='2'%3E%3Cpath transform='translate(-50.75 11.6) rotate(7.25 1409 581) scale(1.029)' d='M1409 581 1450.35 511 1490 581z'/%3E%3Ccircle stroke-width='4' transform='translate(-29 29) rotate(8.7 800 450) scale(1.015)' cx='500' cy='100' r='40'/%3E%3Cpath transform='translate(26.1 -87) rotate(87 401 736) scale(1.015)' d='M400.86 735.5h-83.73c0-23.12 18.74-41.87 41.87-41.87S400.86 712.38 400.86 735.5z'/%3E%3C/g%3E%3Cg stroke='url(%23b)' stroke-width='4'%3E%3Cpath transform='translate(174 -11.6) rotate(2.9 150 345) scale(0.971)' d='M149.8 345.2 118.4 389.8 149.8 434.4 181.2 389.8z'/%3E%3Crect stroke-width='8' transform='translate(-116 -72.5) rotate(104.4 1089 759)' x='1039' y='709' width='100' height='100'/%3E%3Cpath transform='translate(-174 58) rotate(17.4 1400 132)' d='M1426.8 132.4 1405.7 168.8 1363.7 168.8 1342.7 132.4 1363.7 96 1405.7 96z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
      }}
    >
      <Container>{test && <Tests {...test} />}</Container>
    </Box>
  );
};

export default Test;
