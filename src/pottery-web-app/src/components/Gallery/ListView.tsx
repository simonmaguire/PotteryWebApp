import React from "react";
import PotRow from "./PotRow";
import GalleryHeader from "./GalleryHeader";
import { Spinner } from "react-bootstrap";

type ListViewProps = {
  pots: IPot[];
  loadingPots: boolean;
  handleDeletePot: (id: string) => void;
};

const ListView: React.FC<ListViewProps> = (props) => {
  return (
    <div className="pottery-view" role="list">
      <GalleryHeader />
      {!props.loadingPots ? (
        props.pots.map((pot, y) => (
          <PotRow
            key={y}
            pot={pot}
            handleDelete={props.handleDeletePot}
          ></PotRow>
        ))
      ) : (
        <Spinner
          id="loading-spinner"
          animation="border"
          variant="primary"
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
    </div>
  );
};

export default ListView;
