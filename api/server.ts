import Fastify from 'fastify'
import routeMyApis from './routes/myapi'

// import fastifySwagger from '@fastify/swagger';
// import fastifySwaggerUI from '@fastify/swagger-ui';
// import { z } from 'zod';

// import {
//   jsonSchemaTransform,
//   createJsonSchemaTransform,
//   serializerCompiler,
//   validatorCompiler,
//   ZodTypeProvider,
// } from 'fastify-type-provider-zod';

const server = Fastify({
  logger: true
})

server.register(routeMyApis)

export default server
