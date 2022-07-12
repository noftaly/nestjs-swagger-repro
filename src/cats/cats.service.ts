import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { Cat } from './entities/cat.entity';

@Injectable()
export class CatsService {
  create(cat: CreateCatDto): Cat {
    return cat;
  }
}
