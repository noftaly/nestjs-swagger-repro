import { Matches } from 'class-validator';

export class CreateCatDto {
  @Matches(/[a-zA-Z0-9]*/)
  readonly name: string;
}
