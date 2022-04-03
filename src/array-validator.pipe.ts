import {
  ArgumentMetadata,
  Injectable,
  PipeTransform,
  BadRequestException,
} from '@nestjs/common';
@Injectable()
export class ArrayValidatorPipe implements PipeTransform {
  constructor(
    private name: string,
    private post: Function = (ele) => ele,//specify in which part should be the data to validate
  ) {}
  async transform(value: any, { metatype }: ArgumentMetadata) {
    const data = [];
    const validateData = this.post(value);
    let error = false;
    for (const i in validateData) {
      if (Array.isArray(validateData[i])) {
        error = true;        
        data.push(`${this.name}.${i}  must be an object`);
      }
    }

    if (error) {
      throw new BadRequestException(data);
    }
    return value;
  }
}
