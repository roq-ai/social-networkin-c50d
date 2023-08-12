interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Administrator'],
  customerRoles: ['Guest'],
  tenantRoles: ['Administrator', 'Moderator', 'Content Creator', 'Advertiser'],
  tenantName: 'Organization',
  applicationName: 'Social Networking',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
