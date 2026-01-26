type statusType = "inactive" | "pending" | "blacklisted" | "active";

interface userListData {
  organization: string;
  userName: string;
  email: string;
  phoneNumber: string;
  dateJoined: string;
  status: statusType;
}

interface userAnalyticsType {
  title: string;
  icon: string;
  value: string;
  bgColor?: string;
}
