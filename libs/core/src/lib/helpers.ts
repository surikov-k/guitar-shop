import { ClassConstructor, plainToInstance } from 'class-transformer';

export function fillObject<T, V>(dto: ClassConstructor<T>, object: V) {
  return plainToInstance(dto, object, { excludeExtraneousValues: true })
}

export function normalizeGuitarType(string: string): string {
 const letters =  string.toLowerCase().split('');
 letters[0] = letters[0].toUpperCase()
 return letters.join('');
}
