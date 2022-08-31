import semver from 'semver';
import { createConfigDir, getLastUpdate, saveLastUpdate } from 'simple-update-notifier/src/cache';
import getDistVersion from 'simple-update-notifier/src/getDistVersion';
import { IUpdate } from 'simple-update-notifier/src/types';

const hasNewVersion = async ({
  pkg,
  updateCheckInterval = 1000 * 60 * 60 * 24,
  distTag = 'latest',
  alwaysRun,
}: IUpdate) => {
  createConfigDir();
  const lastUpdateCheck = getLastUpdate(pkg.name);
  if (
    alwaysRun ||
    !lastUpdateCheck ||
    lastUpdateCheck < new Date().getTime() - updateCheckInterval
  ) {
    const latestVersion = await getDistVersion(pkg.name, distTag);
    saveLastUpdate(pkg.name);
    if (semver.gt(latestVersion, pkg.version)) {
      return latestVersion;
    }
    return false;
  } else {
    return false;
  }
};

export default hasNewVersion;