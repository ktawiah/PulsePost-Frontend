interface User {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  is_active: boolean;
  bio: string;
  avatar: string;
  created_at: Date;
  updated_at: Date;
  access: string;
  refresh: string;
}

interface Pass {
  password: string;
  re_password: string;
}

interface SocialAuthType {
  provider: string;
  state: string;
  code: string;
  authorization_url: string;
  token: string;
}
