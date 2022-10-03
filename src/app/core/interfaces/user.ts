export interface User {
  username: string,
  email: string,
  password: string,
  confirmPassword: string,
}

export interface loginUser {
  email: string,
  password: string,
}

export interface IPayLoadHeroesResponse {
  powerstats: any;
  response: string;
  results: any[];
  'results-for': string;
}
