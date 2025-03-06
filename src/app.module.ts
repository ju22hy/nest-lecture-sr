import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BldgModule } from './bldg/bldg.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.CLOUDSQL_HOST,
      port: 5432,
      username: process.env.CLOUDSQL_USER,
      password: process.env.CLOUDSQL_PASS,
      database: process.env.CLOUDSQL_DB,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, //프로덕트 환경에서는 false로 바꿔서 배포
    }),
    BldgModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
