import {
  ArgumentMetadata,
  Injectable,
  PipeTransform,
  BadRequestException,
} from '@nestjs/common';
@Injectable()
export class ArrayValidatorPipe implements PipeTransform {
  constructor(
    private objectSchema: any,
    private name: string,
    private post: Function = (ele) => ele,
  ) {}
  async transform(value: any, { metatype }: ArgumentMetadata) {
    const data = [];
    const validateData = this.post(value);
    let error = false;
    for (const i in validateData) {
      const type = typeof validateData[i];
      const types = ['number', 'boolean', 'string'];
      const includes = types.includes(type);
      if (Array.isArray(validateData[i]) || includes) {
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
