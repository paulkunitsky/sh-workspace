module.exports = {
  name: 'sh-api',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/sh-api',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
