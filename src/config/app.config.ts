interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Admin'],
  customerRoles: [],
  tenantRoles: ['Admin', 'Course Creator'],
  tenantName: 'Organization',
  applicationName: 'e-learning',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
