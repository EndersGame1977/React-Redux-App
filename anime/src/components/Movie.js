import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`;

export default function Movie(props) {
  console.log(props);
  return (
    <Card>
      <p>{props.movie.title}</p>
      <p>{props.movie.description}</p>
    </Card>
  );
}
