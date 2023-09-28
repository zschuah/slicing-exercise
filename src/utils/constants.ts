export const URL_CONTACTS = "https://randomuser.me/api/?results=100";
export const generateUrlProfile = (userId: string) =>
  `https://ng-complete-guide-e9c43.firebaseio.com/myapp/users/${userId}.json`;
