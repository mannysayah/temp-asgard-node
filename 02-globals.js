// GLOBALS - NO WINDOW OBJECT

// __dirname	path to current directory
// __filename	file path
// require		function to use modules (CommonJS)
// module	    info about current module (file)
// process	    info about env where the program is being executed
// console
// setInteval
// setTimeout

console.log(__filename);

const interval = 1000; // 1 second

setInterval(()=> {
    console.log(`Current directory is ${__dirname}`);
}, interval);

