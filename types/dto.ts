export interface IDbUserDto {
  id: string;
  role: "admin" | "moder" | "driver";
  username: string;
  login: string;
  password: string;
}

export interface IDbUserToRegisterDto {
  username: string;
  login: string;
  password: string;
}

export interface IDbBalancesDto {
  userId: string;
  count: number;
}

export interface IDbTokenDto {
  id: string;
  refreshToken: string;
  sessionToken: string;
}

export interface IDBRouteDto {
  href: string;
  heading: string;
  description: string;
}
