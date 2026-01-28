type statusType = "inactive" | "pending" | "blacklisted" | "active";

interface userListData {
  organization: string;
  userName: string;
  email: string;
  phoneNumber: string;
  dateJoined: string;
  status: statusType;
  id: string;
}

interface userAnalyticsType {
  title: string;
  icon: string;
  value: number;
}

interface User {
  id: string;
  username: string;

  name: string;
  avatar: string;
  email: string;
  phone: string;
  gender: "male" | "female" | string;
  marital_status: string;
  children: string;
  residence: string;

  education: string;
  employment: boolean;
  work_sector: string;
  work_duration: number;
  company: string;

  income: string;
  loan_repayment: string;

  twitter: string;
  facebook: string;
  instagram: string;

  guarantor: string;
  guarantor_phone: string;
  guarantor_email: string;
  guarantor_relationship: string;

  guarantor2: string;
  guarantor2_phone: string;
  guarantor2_email: string;
  guarantor2_relationship: string;

  bvn: string;
  bank: string;
  bank_number: string;

  lendsqr_balance: string;
  lendsqr_id: string;

  status: statusType;
  rating: number;

  createdAt: string; // ISO date
  date_joined: string; // ISO date
}
