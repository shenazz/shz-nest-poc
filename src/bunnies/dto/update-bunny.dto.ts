import { PartialType } from '@nestjs/mapped-types';
import { CreateBunnyDto } from './create-bunny.dto';

export class UpdateBunnyDto extends PartialType(CreateBunnyDto) {}
