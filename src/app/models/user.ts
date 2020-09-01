export interface User {
    uid: string;
    email: string;
    photoURL?: string;
    displayName?: string;
    tags?: Array<string>;
    postUrl?: Array<string>;
    recommendedtags?: Array<string>;

}