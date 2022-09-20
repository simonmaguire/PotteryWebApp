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

export interface IPotInfo {
  id?: string;
  stage?: string;
  clay?: string;
  name?: string;
  category?: string;
  clay_weight?: string;
  throw_height?: string;
  throw_width?: string;
  throw_notes?: string;
  green_decorations?: string;
  trim_notes?: string;
  glazes?: string;
  glaze_notes?: string;
  result_height?: string;
  result_width?: string;
  result_notes?: string;
}

interface SectionProps {
  potInfo: IPotInfo;
  handleChange: (
    event: React.ChangeEvent<HTMLInputElement & HTMLSelectElement>
  ) => void;
  // handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
