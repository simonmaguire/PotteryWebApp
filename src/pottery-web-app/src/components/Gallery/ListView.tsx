import React from "react";
import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import PotRow from "./PotRow";
// import { IPot } from "../../types";

type ListViewProps = {
  pots: IPot[];
};

const ListView: React.FC<ListViewProps> = (pots) => {
  console.log("list pots: \n", pots);
  return (
    <div className="pottery-view">
      <Table striped bordered id="pottery-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Clay</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {pots.pots.map((pot, y) => (
            <PotRow key={y} pot={pot}></PotRow>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ListView;
