import { RelationLabel } from '../shared/constants';
import { AttackStrength, TypeName } from '../shared/types';

interface ITypeData {
  name: TypeName;
  description: string;
  color: string;
  versus: Array<{ name: TypeName; strength: AttackStrength }>;
}

export const typeData: ITypeData[] = [
  {
    name: 'NORMAL' as TypeName,
    description: '',
    color: '',
    versus: [
      { name: 'NORMAL' as TypeName, strength: RelationLabel.NORMAL_AGAINST },
      { name: 'FIGHTING' as TypeName, strength: RelationLabel.NORMAL_AGAINST },
      { name: 'FLYING' as TypeName, strength: RelationLabel.NORMAL_AGAINST },
      { name: 'POISON' as TypeName, strength: RelationLabel.NORMAL_AGAINST },
      { name: 'GROUND' as TypeName, strength: RelationLabel.NORMAL_AGAINST },
      { name: 'ROCK' as TypeName, strength: RelationLabel.NOT_VERY_EFFECTIVE_AGAINST },
      { name: 'BUG' as TypeName, strength: RelationLabel.NORMAL_AGAINST },
      { name: 'GHOST' as TypeName, strength: RelationLabel.NO_EFFECT_AGAINST },
      { name: 'STEEL' as TypeName, strength: RelationLabel.NOT_VERY_EFFECTIVE_AGAINST },
      { name: 'FIRE' as TypeName, strength: RelationLabel.NORMAL_AGAINST },
      { name: 'WATER' as TypeName, strength: RelationLabel.NORMAL_AGAINST },
      { name: 'GRASS' as TypeName, strength: RelationLabel.NORMAL_AGAINST },
      { name: 'ELECTRIC' as TypeName, strength: RelationLabel.NORMAL_AGAINST },
      { name: 'PSYCHIC' as TypeName, strength: RelationLabel.NORMAL_AGAINST },
      { name: 'ICE' as TypeName, strength: RelationLabel.NORMAL_AGAINST },
      { name: 'DRAGON' as TypeName, strength: RelationLabel.NORMAL_AGAINST },
      { name: 'DARK' as TypeName, strength: RelationLabel.NORMAL_AGAINST },
      { name: 'FAIRY' as TypeName, strength: RelationLabel.NORMAL_AGAINST }
    ]
  },
  {
    name: 'FIGHTING' as TypeName,
    description: '',
    color: '',
    versus: [
      { name: 'NORMAL' as TypeName, strength: RelationLabel.SUPER_EFFECTIVE_AGAINST },
      { name: 'FIGHTING' as TypeName, strength: RelationLabel.NORMAL_AGAINST },
      { name: 'FLYING' as TypeName, strength: RelationLabel.NOT_VERY_EFFECTIVE_AGAINST },
      { name: 'POISON' as TypeName, strength: RelationLabel.NOT_VERY_EFFECTIVE_AGAINST },
      { name: 'GROUND' as TypeName, strength: RelationLabel.NORMAL_AGAINST },
      { name: 'ROCK' as TypeName, strength: RelationLabel.SUPER_EFFECTIVE_AGAINST },
      { name: 'BUG' as TypeName, strength: RelationLabel.NOT_VERY_EFFECTIVE_AGAINST },
      { name: 'GHOST' as TypeName, strength: RelationLabel.NO_EFFECT_AGAINST },
      { name: 'STEEL' as TypeName, strength: RelationLabel.SUPER_EFFECTIVE_AGAINST },
      { name: 'FIRE' as TypeName, strength: RelationLabel.NORMAL_AGAINST },
      { name: 'WATER' as TypeName, strength: RelationLabel.NORMAL_AGAINST },
      { name: 'GRASS' as TypeName, strength: RelationLabel.NORMAL_AGAINST },
      { name: 'ELECTRIC' as TypeName, strength: RelationLabel.NORMAL_AGAINST },
      { name: 'PSYCHIC' as TypeName, strength: RelationLabel.NOT_VERY_EFFECTIVE_AGAINST },
      { name: 'ICE' as TypeName, strength: RelationLabel.SUPER_EFFECTIVE_AGAINST },
      { name: 'DRAGON' as TypeName, strength: RelationLabel.NORMAL_AGAINST },
      { name: 'DARK' as TypeName, strength: RelationLabel.SUPER_EFFECTIVE_AGAINST },
      { name: 'FAIRY' as TypeName, strength: RelationLabel.NOT_VERY_EFFECTIVE_AGAINST }
    ]
  },
  {
    name: 'FLYING' as TypeName,
    description: '',
    color: '',
    versus: []
    // versus: [
    //   { name: 'NORMAL' as TypeName, strength: RelationLabel },
    //   { name: 'FIGHTING' as TypeName, strength: RelationLabel },
    //   { name: 'FLYING' as TypeName, strength: RelationLabel },
    //   { name: 'POISON' as TypeName, strength: RelationLabel },
    //   { name: 'GROUND' as TypeName, strength: RelationLabel },
    //   { name: 'ROCK' as TypeName, strength: RelationLabel },
    //   { name: 'BUG' as TypeName, strength: RelationLabel },
    //   { name: 'GHOST' as TypeName, strength: RelationLabel },
    //   { name: 'STEEL' as TypeName, strength: RelationLabel },
    //   { name: 'FIRE' as TypeName, strength: RelationLabel },
    //   { name: 'WATER' as TypeName, strength: RelationLabel },
    //   { name: 'GRASS' as TypeName, strength: RelationLabel },
    //   { name: 'ELECTRIC' as TypeName, strength: RelationLabel },
    //   { name: 'PSYCHIC' as TypeName, strength: RelationLabel },
    //   { name: 'ICE' as TypeName, strength: RelationLabel },
    //   { name: 'DRAGON' as TypeName, strength: RelationLabel },
    //   { name: 'DARK' as TypeName, strength: RelationLabel },
    //   { name: 'FAIRY' as TypeName, strength: RelationLabel }
    // ]
  },
  {
    name: 'POISON' as TypeName,
    description: '',
    color: '',
    versus: []
    // versus: [
    //   { name: 'NORMAL' as TypeName, strength: RelationLabel },
    //   { name: 'FIGHTING' as TypeName, strength: RelationLabel },
    //   { name: 'FLYING' as TypeName, strength: RelationLabel },
    //   { name: 'POISON' as TypeName, strength: RelationLabel },
    //   { name: 'GROUND' as TypeName, strength: RelationLabel },
    //   { name: 'ROCK' as TypeName, strength: RelationLabel },
    //   { name: 'BUG' as TypeName, strength: RelationLabel },
    //   { name: 'GHOST' as TypeName, strength: RelationLabel },
    //   { name: 'STEEL' as TypeName, strength: RelationLabel },
    //   { name: 'FIRE' as TypeName, strength: RelationLabel },
    //   { name: 'WATER' as TypeName, strength: RelationLabel },
    //   { name: 'GRASS' as TypeName, strength: RelationLabel },
    //   { name: 'ELECTRIC' as TypeName, strength: RelationLabel },
    //   { name: 'PSYCHIC' as TypeName, strength: RelationLabel },
    //   { name: 'ICE' as TypeName, strength: RelationLabel },
    //   { name: 'DRAGON' as TypeName, strength: RelationLabel },
    //   { name: 'DARK' as TypeName, strength: RelationLabel },
    //   { name: 'FAIRY' as TypeName, strength: RelationLabel }
    // ]
  },
  {
    name: 'GROUND' as TypeName,
    description: '',
    color: '',
    versus: []
    // versus: [
    //   { name: 'NORMAL' as TypeName, strength: RelationLabel },
    //   { name: 'FIGHTING' as TypeName, strength: RelationLabel },
    //   { name: 'FLYING' as TypeName, strength: RelationLabel },
    //   { name: 'POISON' as TypeName, strength: RelationLabel },
    //   { name: 'GROUND' as TypeName, strength: RelationLabel },
    //   { name: 'ROCK' as TypeName, strength: RelationLabel },
    //   { name: 'BUG' as TypeName, strength: RelationLabel },
    //   { name: 'GHOST' as TypeName, strength: RelationLabel },
    //   { name: 'STEEL' as TypeName, strength: RelationLabel },
    //   { name: 'FIRE' as TypeName, strength: RelationLabel },
    //   { name: 'WATER' as TypeName, strength: RelationLabel },
    //   { name: 'GRASS' as TypeName, strength: RelationLabel },
    //   { name: 'ELECTRIC' as TypeName, strength: RelationLabel },
    //   { name: 'PSYCHIC' as TypeName, strength: RelationLabel },
    //   { name: 'ICE' as TypeName, strength: RelationLabel },
    //   { name: 'DRAGON' as TypeName, strength: RelationLabel },
    //   { name: 'DARK' as TypeName, strength: RelationLabel },
    //   { name: 'FAIRY' as TypeName, strength: RelationLabel }
    // ]
  },
  {
    name: 'ROCK' as TypeName,
    description: '',
    color: '',
    versus: []
    // versus: [
    //   { name: 'NORMAL' as TypeName, strength: RelationLabel },
    //   { name: 'FIGHTING' as TypeName, strength: RelationLabel },
    //   { name: 'FLYING' as TypeName, strength: RelationLabel },
    //   { name: 'POISON' as TypeName, strength: RelationLabel },
    //   { name: 'GROUND' as TypeName, strength: RelationLabel },
    //   { name: 'ROCK' as TypeName, strength: RelationLabel },
    //   { name: 'BUG' as TypeName, strength: RelationLabel },
    //   { name: 'GHOST' as TypeName, strength: RelationLabel },
    //   { name: 'STEEL' as TypeName, strength: RelationLabel },
    //   { name: 'FIRE' as TypeName, strength: RelationLabel },
    //   { name: 'WATER' as TypeName, strength: RelationLabel },
    //   { name: 'GRASS' as TypeName, strength: RelationLabel },
    //   { name: 'ELECTRIC' as TypeName, strength: RelationLabel },
    //   { name: 'PSYCHIC' as TypeName, strength: RelationLabel },
    //   { name: 'ICE' as TypeName, strength: RelationLabel },
    //   { name: 'DRAGON' as TypeName, strength: RelationLabel },
    //   { name: 'DARK' as TypeName, strength: RelationLabel },
    //   { name: 'FAIRY' as TypeName, strength: RelationLabel }
    // ]
  },
  {
    name: 'BUG' as TypeName,
    description: '',
    color: '',
    versus: []
    // versus: [
    //   { name: 'NORMAL' as TypeName, strength: RelationLabel },
    //   { name: 'FIGHTING' as TypeName, strength: RelationLabel },
    //   { name: 'FLYING' as TypeName, strength: RelationLabel },
    //   { name: 'POISON' as TypeName, strength: RelationLabel },
    //   { name: 'GROUND' as TypeName, strength: RelationLabel },
    //   { name: 'ROCK' as TypeName, strength: RelationLabel },
    //   { name: 'BUG' as TypeName, strength: RelationLabel },
    //   { name: 'GHOST' as TypeName, strength: RelationLabel },
    //   { name: 'STEEL' as TypeName, strength: RelationLabel },
    //   { name: 'FIRE' as TypeName, strength: RelationLabel },
    //   { name: 'WATER' as TypeName, strength: RelationLabel },
    //   { name: 'GRASS' as TypeName, strength: RelationLabel },
    //   { name: 'ELECTRIC' as TypeName, strength: RelationLabel },
    //   { name: 'PSYCHIC' as TypeName, strength: RelationLabel },
    //   { name: 'ICE' as TypeName, strength: RelationLabel },
    //   { name: 'DRAGON' as TypeName, strength: RelationLabel },
    //   { name: 'DARK' as TypeName, strength: RelationLabel },
    //   { name: 'FAIRY' as TypeName, strength: RelationLabel }
    // ]
  },
  {
    name: 'GHOST' as TypeName,
    description: '',
    color: '',
    versus: []
    // versus: [
    //   { name: 'NORMAL' as TypeName, strength: RelationLabel },
    //   { name: 'FIGHTING' as TypeName, strength: RelationLabel },
    //   { name: 'FLYING' as TypeName, strength: RelationLabel },
    //   { name: 'POISON' as TypeName, strength: RelationLabel },
    //   { name: 'GROUND' as TypeName, strength: RelationLabel },
    //   { name: 'ROCK' as TypeName, strength: RelationLabel },
    //   { name: 'BUG' as TypeName, strength: RelationLabel },
    //   { name: 'GHOST' as TypeName, strength: RelationLabel },
    //   { name: 'STEEL' as TypeName, strength: RelationLabel },
    //   { name: 'FIRE' as TypeName, strength: RelationLabel },
    //   { name: 'WATER' as TypeName, strength: RelationLabel },
    //   { name: 'GRASS' as TypeName, strength: RelationLabel },
    //   { name: 'ELECTRIC' as TypeName, strength: RelationLabel },
    //   { name: 'PSYCHIC' as TypeName, strength: RelationLabel },
    //   { name: 'ICE' as TypeName, strength: RelationLabel },
    //   { name: 'DRAGON' as TypeName, strength: RelationLabel },
    //   { name: 'DARK' as TypeName, strength: RelationLabel },
    //   { name: 'FAIRY' as TypeName, strength: RelationLabel }
    // ]
  },
  {
    name: 'STEEL' as TypeName,
    description: '',
    color: '',
    versus: []
    // versus: [
    //   { name: 'NORMAL' as TypeName, strength: RelationLabel },
    //   { name: 'FIGHTING' as TypeName, strength: RelationLabel },
    //   { name: 'FLYING' as TypeName, strength: RelationLabel },
    //   { name: 'POISON' as TypeName, strength: RelationLabel },
    //   { name: 'GROUND' as TypeName, strength: RelationLabel },
    //   { name: 'ROCK' as TypeName, strength: RelationLabel },
    //   { name: 'BUG' as TypeName, strength: RelationLabel },
    //   { name: 'GHOST' as TypeName, strength: RelationLabel },
    //   { name: 'STEEL' as TypeName, strength: RelationLabel },
    //   { name: 'FIRE' as TypeName, strength: RelationLabel },
    //   { name: 'WATER' as TypeName, strength: RelationLabel },
    //   { name: 'GRASS' as TypeName, strength: RelationLabel },
    //   { name: 'ELECTRIC' as TypeName, strength: RelationLabel },
    //   { name: 'PSYCHIC' as TypeName, strength: RelationLabel },
    //   { name: 'ICE' as TypeName, strength: RelationLabel },
    //   { name: 'DRAGON' as TypeName, strength: RelationLabel },
    //   { name: 'DARK' as TypeName, strength: RelationLabel },
    //   { name: 'FAIRY' as TypeName, strength: RelationLabel }
    // ]
  },
  {
    name: 'FIRE' as TypeName,
    description: '',
    color: '',
    versus: []
    // versus: [
    //   { name: 'NORMAL' as TypeName, strength: RelationLabel },
    //   { name: 'FIGHTING' as TypeName, strength: RelationLabel },
    //   { name: 'FLYING' as TypeName, strength: RelationLabel },
    //   { name: 'POISON' as TypeName, strength: RelationLabel },
    //   { name: 'GROUND' as TypeName, strength: RelationLabel },
    //   { name: 'ROCK' as TypeName, strength: RelationLabel },
    //   { name: 'BUG' as TypeName, strength: RelationLabel },
    //   { name: 'GHOST' as TypeName, strength: RelationLabel },
    //   { name: 'STEEL' as TypeName, strength: RelationLabel },
    //   { name: 'FIRE' as TypeName, strength: RelationLabel },
    //   { name: 'WATER' as TypeName, strength: RelationLabel },
    //   { name: 'GRASS' as TypeName, strength: RelationLabel },
    //   { name: 'ELECTRIC' as TypeName, strength: RelationLabel },
    //   { name: 'PSYCHIC' as TypeName, strength: RelationLabel },
    //   { name: 'ICE' as TypeName, strength: RelationLabel },
    //   { name: 'DRAGON' as TypeName, strength: RelationLabel },
    //   { name: 'DARK' as TypeName, strength: RelationLabel },
    //   { name: 'FAIRY' as TypeName, strength: RelationLabel }
    // ]
  },
  {
    name: 'WATER' as TypeName,
    description: '',
    color: '',
    versus: []
    // versus: [
    //   { name: 'NORMAL' as TypeName, strength: RelationLabel },
    //   { name: 'FIGHTING' as TypeName, strength: RelationLabel },
    //   { name: 'FLYING' as TypeName, strength: RelationLabel },
    //   { name: 'POISON' as TypeName, strength: RelationLabel },
    //   { name: 'GROUND' as TypeName, strength: RelationLabel },
    //   { name: 'ROCK' as TypeName, strength: RelationLabel },
    //   { name: 'BUG' as TypeName, strength: RelationLabel },
    //   { name: 'GHOST' as TypeName, strength: RelationLabel },
    //   { name: 'STEEL' as TypeName, strength: RelationLabel },
    //   { name: 'FIRE' as TypeName, strength: RelationLabel },
    //   { name: 'WATER' as TypeName, strength: RelationLabel },
    //   { name: 'GRASS' as TypeName, strength: RelationLabel },
    //   { name: 'ELECTRIC' as TypeName, strength: RelationLabel },
    //   { name: 'PSYCHIC' as TypeName, strength: RelationLabel },
    //   { name: 'ICE' as TypeName, strength: RelationLabel },
    //   { name: 'DRAGON' as TypeName, strength: RelationLabel },
    //   { name: 'DARK' as TypeName, strength: RelationLabel },
    //   { name: 'FAIRY' as TypeName, strength: RelationLabel }
    // ]
  },
  {
    name: 'GRASS' as TypeName,
    description: '',
    color: '',
    versus: []
    // versus: [
    //   { name: 'NORMAL' as TypeName, strength: RelationLabel },
    //   { name: 'FIGHTING' as TypeName, strength: RelationLabel },
    //   { name: 'FLYING' as TypeName, strength: RelationLabel },
    //   { name: 'POISON' as TypeName, strength: RelationLabel },
    //   { name: 'GROUND' as TypeName, strength: RelationLabel },
    //   { name: 'ROCK' as TypeName, strength: RelationLabel },
    //   { name: 'BUG' as TypeName, strength: RelationLabel },
    //   { name: 'GHOST' as TypeName, strength: RelationLabel },
    //   { name: 'STEEL' as TypeName, strength: RelationLabel },
    //   { name: 'FIRE' as TypeName, strength: RelationLabel },
    //   { name: 'WATER' as TypeName, strength: RelationLabel },
    //   { name: 'GRASS' as TypeName, strength: RelationLabel },
    //   { name: 'ELECTRIC' as TypeName, strength: RelationLabel },
    //   { name: 'PSYCHIC' as TypeName, strength: RelationLabel },
    //   { name: 'ICE' as TypeName, strength: RelationLabel },
    //   { name: 'DRAGON' as TypeName, strength: RelationLabel },
    //   { name: 'DARK' as TypeName, strength: RelationLabel },
    //   { name: 'FAIRY' as TypeName, strength: RelationLabel }
    // ]
  },
  {
    name: 'ELECTRIC' as TypeName,
    description: '',
    color: '',
    versus: []
    // versus: [
    //   { name: 'NORMAL' as TypeName, strength: RelationLabel },
    //   { name: 'FIGHTING' as TypeName, strength: RelationLabel },
    //   { name: 'FLYING' as TypeName, strength: RelationLabel },
    //   { name: 'POISON' as TypeName, strength: RelationLabel },
    //   { name: 'GROUND' as TypeName, strength: RelationLabel },
    //   { name: 'ROCK' as TypeName, strength: RelationLabel },
    //   { name: 'BUG' as TypeName, strength: RelationLabel },
    //   { name: 'GHOST' as TypeName, strength: RelationLabel },
    //   { name: 'STEEL' as TypeName, strength: RelationLabel },
    //   { name: 'FIRE' as TypeName, strength: RelationLabel },
    //   { name: 'WATER' as TypeName, strength: RelationLabel },
    //   { name: 'GRASS' as TypeName, strength: RelationLabel },
    //   { name: 'ELECTRIC' as TypeName, strength: RelationLabel },
    //   { name: 'PSYCHIC' as TypeName, strength: RelationLabel },
    //   { name: 'ICE' as TypeName, strength: RelationLabel },
    //   { name: 'DRAGON' as TypeName, strength: RelationLabel },
    //   { name: 'DARK' as TypeName, strength: RelationLabel },
    //   { name: 'FAIRY' as TypeName, strength: RelationLabel }
    // ]
  },
  {
    name: 'PSYCHIC' as TypeName,
    description: '',
    color: '',
    versus: []
    // versus: [
    //   { name: 'NORMAL' as TypeName, strength: RelationLabel },
    //   { name: 'FIGHTING' as TypeName, strength: RelationLabel },
    //   { name: 'FLYING' as TypeName, strength: RelationLabel },
    //   { name: 'POISON' as TypeName, strength: RelationLabel },
    //   { name: 'GROUND' as TypeName, strength: RelationLabel },
    //   { name: 'ROCK' as TypeName, strength: RelationLabel },
    //   { name: 'BUG' as TypeName, strength: RelationLabel },
    //   { name: 'GHOST' as TypeName, strength: RelationLabel },
    //   { name: 'STEEL' as TypeName, strength: RelationLabel },
    //   { name: 'FIRE' as TypeName, strength: RelationLabel },
    //   { name: 'WATER' as TypeName, strength: RelationLabel },
    //   { name: 'GRASS' as TypeName, strength: RelationLabel },
    //   { name: 'ELECTRIC' as TypeName, strength: RelationLabel },
    //   { name: 'PSYCHIC' as TypeName, strength: RelationLabel },
    //   { name: 'ICE' as TypeName, strength: RelationLabel },
    //   { name: 'DRAGON' as TypeName, strength: RelationLabel },
    //   { name: 'DARK' as TypeName, strength: RelationLabel },
    //   { name: 'FAIRY' as TypeName, strength: RelationLabel }
    // ]
  },
  {
    name: 'ICE' as TypeName,
    description: '',
    color: '',
    versus: []
    // versus: [
    //   { name: 'NORMAL' as TypeName, strength: RelationLabel },
    //   { name: 'FIGHTING' as TypeName, strength: RelationLabel },
    //   { name: 'FLYING' as TypeName, strength: RelationLabel },
    //   { name: 'POISON' as TypeName, strength: RelationLabel },
    //   { name: 'GROUND' as TypeName, strength: RelationLabel },
    //   { name: 'ROCK' as TypeName, strength: RelationLabel },
    //   { name: 'BUG' as TypeName, strength: RelationLabel },
    //   { name: 'GHOST' as TypeName, strength: RelationLabel },
    //   { name: 'STEEL' as TypeName, strength: RelationLabel },
    //   { name: 'FIRE' as TypeName, strength: RelationLabel },
    //   { name: 'WATER' as TypeName, strength: RelationLabel },
    //   { name: 'GRASS' as TypeName, strength: RelationLabel },
    //   { name: 'ELECTRIC' as TypeName, strength: RelationLabel },
    //   { name: 'PSYCHIC' as TypeName, strength: RelationLabel },
    //   { name: 'ICE' as TypeName, strength: RelationLabel },
    //   { name: 'DRAGON' as TypeName, strength: RelationLabel },
    //   { name: 'DARK' as TypeName, strength: RelationLabel },
    //   { name: 'FAIRY' as TypeName, strength: RelationLabel }
    // ]
  },
  {
    name: 'DRAGON' as TypeName,
    description: '',
    color: '',
    versus: []
    // versus: [
    //   { name: 'NORMAL' as TypeName, strength: RelationLabel },
    //   { name: 'FIGHTING' as TypeName, strength: RelationLabel },
    //   { name: 'FLYING' as TypeName, strength: RelationLabel },
    //   { name: 'POISON' as TypeName, strength: RelationLabel },
    //   { name: 'GROUND' as TypeName, strength: RelationLabel },
    //   { name: 'ROCK' as TypeName, strength: RelationLabel },
    //   { name: 'BUG' as TypeName, strength: RelationLabel },
    //   { name: 'GHOST' as TypeName, strength: RelationLabel },
    //   { name: 'STEEL' as TypeName, strength: RelationLabel },
    //   { name: 'FIRE' as TypeName, strength: RelationLabel },
    //   { name: 'WATER' as TypeName, strength: RelationLabel },
    //   { name: 'GRASS' as TypeName, strength: RelationLabel },
    //   { name: 'ELECTRIC' as TypeName, strength: RelationLabel },
    //   { name: 'PSYCHIC' as TypeName, strength: RelationLabel },
    //   { name: 'ICE' as TypeName, strength: RelationLabel },
    //   { name: 'DRAGON' as TypeName, strength: RelationLabel },
    //   { name: 'DARK' as TypeName, strength: RelationLabel },
    //   { name: 'FAIRY' as TypeName, strength: RelationLabel }
    // ]
  },
  {
    name: 'DARK' as TypeName,
    description: '',
    color: '',
    versus: []
    // versus: [
    //   { name: 'NORMAL' as TypeName, strength: RelationLabel },
    //   { name: 'FIGHTING' as TypeName, strength: RelationLabel },
    //   { name: 'FLYING' as TypeName, strength: RelationLabel },
    //   { name: 'POISON' as TypeName, strength: RelationLabel },
    //   { name: 'GROUND' as TypeName, strength: RelationLabel },
    //   { name: 'ROCK' as TypeName, strength: RelationLabel },
    //   { name: 'BUG' as TypeName, strength: RelationLabel },
    //   { name: 'GHOST' as TypeName, strength: RelationLabel },
    //   { name: 'STEEL' as TypeName, strength: RelationLabel },
    //   { name: 'FIRE' as TypeName, strength: RelationLabel },
    //   { name: 'WATER' as TypeName, strength: RelationLabel },
    //   { name: 'GRASS' as TypeName, strength: RelationLabel },
    //   { name: 'ELECTRIC' as TypeName, strength: RelationLabel },
    //   { name: 'PSYCHIC' as TypeName, strength: RelationLabel },
    //   { name: 'ICE' as TypeName, strength: RelationLabel },
    //   { name: 'DRAGON' as TypeName, strength: RelationLabel },
    //   { name: 'DARK' as TypeName, strength: RelationLabel },
    //   { name: 'FAIRY' as TypeName, strength: RelationLabel }
    // ]
  },
  {
    name: 'FAIRY' as TypeName,
    description: '',
    color: '',
    versus: []
    // versus: [
    //   { name: 'NORMAL' as TypeName, strength: RelationLabel },
    //   { name: 'FIGHTING' as TypeName, strength: RelationLabel },
    //   { name: 'FLYING' as TypeName, strength: RelationLabel },
    //   { name: 'POISON' as TypeName, strength: RelationLabel },
    //   { name: 'GROUND' as TypeName, strength: RelationLabel },
    //   { name: 'ROCK' as TypeName, strength: RelationLabel },
    //   { name: 'BUG' as TypeName, strength: RelationLabel },
    //   { name: 'GHOST' as TypeName, strength: RelationLabel },
    //   { name: 'STEEL' as TypeName, strength: RelationLabel },
    //   { name: 'FIRE' as TypeName, strength: RelationLabel },
    //   { name: 'WATER' as TypeName, strength: RelationLabel },
    //   { name: 'GRASS' as TypeName, strength: RelationLabel },
    //   { name: 'ELECTRIC' as TypeName, strength: RelationLabel },
    //   { name: 'PSYCHIC' as TypeName, strength: RelationLabel },
    //   { name: 'ICE' as TypeName, strength: RelationLabel },
    //   { name: 'DRAGON' as TypeName, strength: RelationLabel },
    //   { name: 'DARK' as TypeName, strength: RelationLabel },
    //   { name: 'FAIRY' as TypeName, strength: RelationLabel }
    // ]
  }
];
