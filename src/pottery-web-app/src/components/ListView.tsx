import React from "react";
import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import PotRow from "./PotRow";
import { IPot } from "../types";

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
            <th>#</th>
            <th>Last Edit</th>
            <th>Created On</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2</td>
            <td>9-1-2022</td>
            <td>8-26-2022</td>
            <td>Mug</td>
          </tr>
          {pots.pots.map((pot) => (
            <PotRow pot={pot}></PotRow>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ListView;
