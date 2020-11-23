export interface User {
    email:string;
    family_name:string;
    given_name : string;
    granted_scopes : string;
    id : string;
    locale : string;
    name : string;
    picture : string;
    verified_email :boolean;
}


/*
email: "ayman.elsawy.kh94@gmail.com"
family_name: "khalifa"
given_name: "ayman"
granted_scopes: "https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile openid"
id: "116818215199448227210"
locale: "ar"
name: "ayman khalifa"
picture: "https://lh3.googleusercontent.com/a-/AOh14GjoQevqSgTWxDcrpXePdR-g4ljsJrstvMSq-cMh=s96-c"
verified_email: true

*/