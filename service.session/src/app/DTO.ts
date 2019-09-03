export interface IdentityDTO {
  me: string;
  token: string;
  target?: string;
}

export interface ServiceDTO {
  name: string;
  talkTo: Array<ServiceDTO>;
}
