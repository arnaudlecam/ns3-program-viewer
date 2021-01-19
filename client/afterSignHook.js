// See: https://medium.com/@TwitterArchiveEraser/notarize-electron-apps-7a5f988406db

const fs = require('fs');
const path = require('path');
const electron_notarize = require('electron-notarize');

module.exports = async function (params) {

    // Only notarize the app on Mac OS only.
    if (process.platform !== 'darwin' && params.electronPlatformName !== 'darwin') {
        return;
    }
    //console.log(params);
    //console.error("notarize is DISABLE FOR NOW");
    //return;

    //console.log('afterSign hook triggered', params);

    // Same appId in electron-builder.
    let appId = 'com.chris55.nord-file-viewer';

    let appPath = path.join(params.appOutDir, `${params.packager.appInfo.productFilename}.app`);
    if (!fs.existsSync(appPath)) {
        throw new Error(`Cannot find application at: ${appPath}`);
    }

    console.log(`Notarizing ${appId} found at ${appPath}`);

    try {
        console.log("USER", process.env.appleId, process.env.appleIdPassword);
        await electron_notarize.notarize({
            appBundleId: appId,
            appPath: appPath,
            appleId: process.env.appleId,
            appleIdPassword: process.env.appleIdPassword,
        });
    } catch (error) {
        console.error(error);
    }

    console.log(`Done notarizing ${appId}`);
};
