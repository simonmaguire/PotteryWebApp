import React from "react";
import Table from "react-bootstrap/Table";
import PotRow from "./PotRow";
import GalleryHeader from "./GalleryHeader";

type ListViewProps = {
  pots: IPot[];
  handleDeletePot: (id: string) => void;
};

const ListView: React.FC<ListViewProps> = (props) => {
  return (
    <div className="pottery-view" role="list">
      <GalleryHeader />
      {props.pots.map((pot, y) => (
        <PotRow key={y} pot={pot} handleDelete={props.handleDeletePot}></PotRow>
      ))}
    </div>
  );
};

export default ListView;
