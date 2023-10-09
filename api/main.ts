// import { logger } from './config/winston';
import server from './server';

async function main() {
//     server.listen('3000', () => {
//     // logger.info('🛡️ Server listening on port: 3000');
//     console.log('🛡️ Server listening on port: 3000');
//   });

  server.ready();

  server.listen({ port: 3000 },
    function (err, address) {
      if (err) {
        server.log.error(err)
        process.exit(1)
      }
      // Server is now listening on ${address}
      console.log('🛡️ Server listening on port: 3000');
    }
  )
}

main();


console.log("i'am main.ts")