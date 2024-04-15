export interface projectProps {
  name: string;
  imgUrl: string;
  techs: Array<string>;
  type: string;
  website: string;
  repo: string;
}

export interface messageProps {
  name: string;
  email: string;
  linkedin: string;
  message: string;
}

export interface createContactProps {
  status: number;
  contact_id: string;
  message: string;
}
