export interface User {
    uid: string;
    email: string;
    photoURL?: string;
    displayName?: string;
    tags?: Array<string>;
    recommendedtags?: Array<string>;
}