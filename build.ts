// eslint-disable-next-line @typescript-eslint/no-var-requires
const { copy, remove } = require('fs-extra');

const dest = './build/dist';

async function init() {
   await remove(dest);
   await copy('./dist', dest);
}
init();
