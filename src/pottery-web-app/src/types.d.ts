interface IPot {
  _id: string;
  name: string;
  clay: string;
  category: string;
  stage: string;
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
  pot?: IPotInfo;
};

interface IPotInfo {
  _id: string;
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
  result_date?: string;
  throw_date?: string;
  trim_date?: string;
}

interface SectionProps {
  potInfo: IPotInfo;
  // updateDate: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChange: (
    event: React.ChangeEvent<HTMLInputElement & HTMLSelectElement>
  ) => void;
}
