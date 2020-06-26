import React from "react";
import Card from "../components/Card/Card";
import CardBottom from "../components/Card/CardBottom.png";
import { Link } from "react-router-dom";

export default function Commission() {
  return (
    <div>
      <h1>Commissions</h1>
      <Link to="/teste">
        <Card name="UwU" cardImage={CardBottom} />
      </Link>
    </div>
  );
}
