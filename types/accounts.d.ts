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
  authorization_uri: string;
  token: string;
  redirect_uri;
}

interface ResetNewPass {
  new_password: string;
  re_new_password: string;
  token: string;
  uid: string;
}
