import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductosModule } from './productos/productos.module';
import { CommonModule } from './common/common.module';
import { PedidosModule } from './pedidos/pedidos.module';
import { SeedModule } from './seed/seed.module';
import { ArchivosModule } from './archivos/archivos.module';
import { AuthModule } from './auth/auth.module';
import { MensajesWsModule } from './mensajes-ws/mensajes-ws.module';

@Module({
  imports: [
    ConfigModule.forRoot(),

    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      database: process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      autoLoadEntities: true,
      synchronize: true, //No se suele usar en prod
    }),

    ProductosModule,

    CommonModule,

    PedidosModule,

    SeedModule,

    ArchivosModule,

    AuthModule,

    MensajesWsModule,
  ],
})
export class AppModule {}
