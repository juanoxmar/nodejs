import path from 'path';

// process.mainModule was deprecated
export default path.dirname(require.main!.filename);
