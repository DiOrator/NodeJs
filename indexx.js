const fsPromises = require('fs').promises;
const path = require('path');

const filesOps = async () => {
  try {
    const data = await fsPromises.readFile(
      path.join(__dirname, 'files', 'starter.txt'),
      'utf8'
    );
    console.log(data);
    await fsPromises.unlink(path.join(__dirname, 'files', 'starter.txt'));
    await fsPromises.writeFile(
      path.join(__dirname, 'files', 'promisesWrite.txt'),
      data
    );
    await fsPromises.appendFile(
      path.join(__dirname, 'files', 'promisesWrite.txt'),
      '\n\nNice to meet you!'
    );
    await fsPromises.rename(
      path.join(__dirname, 'files', 'promisesWrite.txt'),
      path.join(__dirname, 'files', 'promisesComplete.txt')
    );

    const newData = await fsPromises.readFile(
      path.join(__dirname, 'files', 'promisesComplete.txt'),
      'utf8'
    );
    console.log(newData);
  } catch (err) {
    console.error(err);
  }
};

filesOps();

// console.log('Hello...');

// fs.writeFile(
//   path.join(__dirname, 'files', 'reply.txt'),
//   'Nice to meet you!',
//   (err) => {
//     if (err) throw err;
//     console.log('Write complete');

//     fs.appendFile(
//       path.join(__dirname, 'files', 'reply.txt'),
//       '\n\nYes it is.',
//       (err) => {
//         if (err) throw err;
//         console.log('Append complete');

//         fs.rename(
//           path.join(__dirname, 'files', 'reply.txt'),
//           path.join(__dirname, 'files', 'newReply.txt'),
//           (err) => {
//             if (err) throw err;
//             console.log('Rename complete');
//           }
//         );
//       }
//     );
//   }
// );

// process.on('uncaughtException', (err) => {
//   console.error(`We're sorry, there was an uncaught error: ${err}`);
//   process.exit(1);
// });
