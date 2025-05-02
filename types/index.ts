type LoginCredentials = {
  email: string;
  password: string;
};

export type LoginFormData = LoginCredentials & {
  rememberMe?: boolean;
};

export type LoginFormRequestBody = LoginCredentials & {
  user_type: string;
  ip_address?: string;
};

export type GuestUser = {
  email: string;
};

export interface UserData {
  id: string;
  ref_id: string;
  user_type: string;
  avatar: string | null;
  email: string;
  first_name: string;
  country: string;
  last_name: string;
  dob: string;
  phone_country_code: string;
  phone_number: string;
  status: string;
  is_email_verified: string;
  permissions: {
    organization_id: string;
    org_ref_id: string;
    subdomain: string;
    roles: string[];
    on_boarded: boolean;
    kyc: string | null;
    on_boarding_steps: string;
    account_status: string;
  };
}

export interface AuthUser {
  accessToken: string;
  refreshToken: string;
  user: UserData;
}

export interface AuthContextType {
  accessToken: string;
  user: UserData | null;
  guestUser: GuestUser | null;
  loginSecondFactor: (userData: {
    accessToken: string;
    refreshToken: string;
    user: UserData;
  }) => void;
  logout: () => void;
  setGuestUser: (guestUser: GuestUser | null) => void;
  isLoggedIn: () => boolean;
}
