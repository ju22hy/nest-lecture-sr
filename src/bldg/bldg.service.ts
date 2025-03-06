import { Injectable } from '@nestjs/common'; //의존성 주입 가능?
import { InjectRepository } from '@nestjs/typeorm'; 
import { Bldg } from './bldg.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BldgService {
  constructor(
    @InjectRepository(Bldg)
    private bldgRepository: Repository<Bldg>,
  ) {}

  async findAll(): Promise<Bldg[]> {
    return this.bldgRepository.find(); 
    //find: typeorm에서 특정 엔티티(Entity)의 모든 데이터를 조회하는 함수
    //DB에서 원하는 데이터를 검색할 때 사용, 조건을 추가해 특정 데이터만 가져올 수도 있음
  }

  async findNearby(x: number, y: number, radius: number): Promise<Bldg[]> {
    return this.bldgRepository
      .createQueryBuilder('bldg')
      .where(
          `ST_Distance(
            ST_SetSRID(ST_MakePoint(:x, :y), 4326)::geography,
            bldg.bldg_geom::geography
            ) <= :radius`,
        { x, y, radius },
      )
      .getMany();
  }
}
