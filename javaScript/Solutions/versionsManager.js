const vm = function (version) {
  let versionObject = {
    history: [],
    MAJOR: 0,
    MINOR: 0,
    PATCH: 0,
    major() {
      this.history.push(`${this.MAJOR}.${this.MINOR}.${this.PATCH}`);
      this.MAJOR++;
      this.MINOR = 0;
      this.PATCH = 0;
      return this;
    },
    minor() {
      this.history.push(`${this.MAJOR}.${this.MINOR}.${this.PATCH}`);
      this.MINOR++;
      this.PATCH = 0;
      return this;
    },
    patch() {
      this.history.push(`${this.MAJOR}.${this.MINOR}.${this.PATCH}`);
      this.PATCH++;
      return this;
    },
    release() {
      return `${this.MAJOR}.${this.MINOR}.${this.PATCH}`;
    },
    rollback() {
      if (this.history.length) {
        this.setVersion(this.history.pop());
        return this;
      } else {
        throw new Error('Cannot rollback!');
      }
    },
    setVersion(version) {
      if (version) {
        const validVersion = version.match(/(^\d+$|^\d+.\d+$|^\d+.\d+.\d+)/g);
        if (!validVersion)
          throw new Error('Error occured while parsing version!');

        const versionArr = validVersion[0].match(/\d+/g);
        if (versionArr[0]) this.MAJOR = versionArr[0];
        if (versionArr[1]) this.MINOR = versionArr[1];
        if (versionArr[2]) this.PATCH = versionArr[2];
      } else this.PATCH = 1;
    },
  };

  versionObject.setVersion(version);

  return versionObject;
};

/* Versions Manager
6kyu
Description:
In this kata we are going to mimic a software versioning system.

You have to implement a vm function returning an object.

It should accept an optional parameter that represents the initial version. The input will be in one of the following formats: "{MAJOR}", "{MAJOR}.{MINOR}", or "{MAJOR}.{MINOR}.{PATCH}". More values may be provided after PATCH but they should be ignored. If these 3 parts are not decimal values, an exception with the message "Error occured while parsing version!" should be thrown. If the initial version is not provided or is an empty string, use "0.0.1" by default.

This class should support the following methods, all of which should be chainable (except release):

major() - increase MAJOR by 1, set MINOR and PATCH to 0
minor() - increase MINOR by 1, set PATCH to 0
patch() - increase PATCH by 1
rollback() - return the MAJOR, MINOR, and PATCH to their values before the previous major/minor/patch call, or throw an exception with the message "Cannot rollback!" if there's no version to roll back to. Multiple calls to rollback() should be possible and restore the version history
release() - return a string in the format "{MAJOR}.{MINOR}.{PATCH}"
May the binary force be with you! */
