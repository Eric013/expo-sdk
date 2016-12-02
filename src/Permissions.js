// @flow

import {
  NativeModules,
} from 'react-native';

let { ExponentPermissions: Permissions } = NativeModules;

type PermissionType = 'localNotifications' | 'remoteNotifications' | 'location' | 'camera';
type PermissionStatus = 'undetermined' | 'granted' | 'denied';
type PermissionExpires = 'never';
type PermissionDetailsLocationIOS = {
  scope: 'whenInUse' | 'always',
};
type PermissionDetailsLocationAndroid = {
  scope: 'fine' | 'coarse' | 'none',
};
type PermissionResponse = {
  status: PermissionStatus,
  expires: PermissionExpires,
  ios?: PermissionDetailsLocationIOS,
  android?: PermissionDetailsLocationAndroid,
};

export async function getAsync(type: PermissionType):Promise<PermissionResponse> {
  return Permissions.getAsync(type);
}

export async function askAsync(type: PermissionType):Promise<PermissionResponse> {
  return Permissions.askAsync(type);
}

export const CAMERA = 'camera';
export const LOCAL_NOTIFICATIONS = 'localNotifications';
export const LOCATION = 'location';
export const REMOTE_NOTIFICATIONS = 'remoteNotifications';
