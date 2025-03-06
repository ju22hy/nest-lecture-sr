import { Controller, Get, Query } from '@nestjs/common';
import { BldgService } from './bldg.service';
import { Bldg } from './bldg.entity';
import { BldgNearbyDto } from './dto/bldg.nearby-dto';

@Controller('bldg')
export class BldgController {
  constructor(private BldgService: BldgService) {}

  @Get()
  async findAll(): Promise<Bldg[]> {
    return this.BldgService.findAll();
  }

  @Get('nearby')
  async FindNearby(@Query() query: BldgNearbyDto): Promise<Bldg[]> {
    return this.BldgService.findNearby(query.x, query.y, query.radius);
  }
}
