const glob = require('glob');
const path = require('path');
const loadLibrary = function(parentFolder, libraryName) {
    const files = glob(`${parentFolder}/${libraryName}*${process.platform}*.node`, {sync: true});    
    var binding = null;
    files.forEach(file => {
        try {
            var _temp = require(file);			
            binding = _temp;
        } catch( e) {			
        }
    });
    if (!binding) {
        console.log('[Warn]', 'no libarary available after trying files', files)
    }
    return binding;
};
exports.load = loadLibrary;
