import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { GlobalExceptionFilter } from './common/filters/global-exception.filter';
import { ResponseInterceptor } from './common/interceptors/response.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Prefijo global → todos los endpoints quedan bajo /api
  app.setGlobalPrefix('api');

  // Filtro global de excepciones
  app.useGlobalFilters(new GlobalExceptionFilter());

  // Interceptor global: envuelve todas las respuestas en un formato estándar
  app.useGlobalInterceptors(new ResponseInterceptor());

  // CORS habilitado para desarrollo
  app.enableCors();

  const port = process.env.PORT ?? 3000;
  await app.listen(port);

  console.log(`🚀 Running on  → http://localhost:${port}`);
}

bootstrap();