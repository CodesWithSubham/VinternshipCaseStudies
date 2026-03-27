declare namespace Express {
  export interface Request {
    dischargeLog?: Array<{ step: string; time: string }>;
  }
}
