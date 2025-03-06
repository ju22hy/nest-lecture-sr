import { Module } from '@nestjs/common';
import { BldgController } from './bldg.controller';
import { BldgService } from './bldg.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bldg } from './bldg.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Bldg])],
  controllers: [BldgController],
  providers: [BldgService]
})
export class BldgModule {}
