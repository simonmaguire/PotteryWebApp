import React from "react";
import PotCard from "./PotCard";
import { Spinner } from "react-bootstrap";

type PotteryCardGridProps = {
  pots: IPot[];
  loadingPots: boolean;
  handleDeletePot: (id: string) => void;
};

const PotteryCardGrid: React.FC<PotteryCardGridProps> = (props) => {
  return (
    <div className="pottery-grid-view">
      {!props.loadingPots ? (
        props.pots.map((pot, y) => (
          <PotCard
            key={y}
            pot={pot}
            handleDelete={props.handleDeletePot}
          ></PotCard>
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

export default PotteryCardGrid;
