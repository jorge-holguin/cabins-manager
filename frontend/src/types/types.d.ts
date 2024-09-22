// src/types/types.d.ts

export interface User {
    id: number;
    email: string;
    role: string;
    exp: number;
  }
  
  export interface Cabin {
    id: number;
    name: string;
    status: string;
    rate: number;
  }
  
  export interface Expense {
    id: number;
    type: string;
    description: string;
    amount: number;
    date: string;
  }
  
  export interface UsageRecord {
    id: number;
    cabinId: number;
    startTime: string;
    endTime: string | null;
    totalAmount: number | null;
  }
  
  export interface ReportParams {
    startDate?: string;
    endDate?: string;
  }
  