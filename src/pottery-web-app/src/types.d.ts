interface IPot {
  _id: string;
  clay: string;
  category: string;
  status: boolean;
  createdOn?: string;
  lastUpdate?: string;
}

interface PotProps {
  pot: IPot;
}

type ApiDataType = {
  message: string;
  status: string;
  pots: IPot[];
  pot?: IPot;
};
