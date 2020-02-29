import { RelationLabel } from './constants';

export interface IAgainst {
  id: number;
  attackTypeName: TypeName;
  attackStrength: AttackStrength;
  defendTypeName: TypeName;
}

export interface ICreateAgainst {
  attackTypeName: TypeName;
  attackStrength: AttackStrength;
  defendTypeName: TypeName;
}

export type AttackStrength =
  | RelationLabel.NO_EFFECT_AGAINST
  | RelationLabel.NOT_VERY_EFFECTIVE_AGAINST
  | RelationLabel.NORMAL_AGAINST
  | RelationLabel.SUPER_EFFECTIVE_AGAINST;

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
