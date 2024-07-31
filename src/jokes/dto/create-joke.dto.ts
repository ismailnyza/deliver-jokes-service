import { IsString, IsNotEmpty } from 'class-validator';

export class CreateJokeDto {
  @IsString()
  @IsNotEmpty()
  type: string;

  @IsString()
  @IsNotEmpty()
  content: string;
}
