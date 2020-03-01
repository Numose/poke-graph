import { AgainstTypeStrength } from './constants';

export interface IAgainst {
  id: number;
  attackTypeName: TypeName;
  attackTypeStrength: AgainstTypeStrength;
  defendTypeName: TypeName;
}

export interface ICreateAgainst {
  attackTypeName: TypeName;
  attackTypeStrength: AgainstTypeStrength;
  defendTypeName: TypeName;
}

export type Opaque<K, T> = T & { __TYPE__: K };

export type TypeName = Opaque<'TypeName', string>;

export interface IType {
  id: number;
  name: TypeName;
  description: string;
  color: string;
}

export interface ICreateType {
  name: string;
  description: string;
  color: string;
}
