import { cyan, green } from 'colors';
import { Driver, Node } from 'neo4j-driver';

import { NodeLabel } from '../shared/constants';
import { TypeName, IType, ICreateType } from '../shared/types';

export async function loadTypeData(driver: Driver, data: ICreateType): Promise<IType> {
  const session = driver.session();
  try {
    let statement = '';
    statement += `CREATE (t:${NodeLabel.TYPE} { name: $name, description: $description, color: $color })\n`;
    statement += `RETURN t`;

    let params = {
      name: data.name as TypeName,
      description: data.description,
      color: data.color
    };

    const { records } = await session.run(statement, params);
    const { identity } = records[0].get('t') as Node;

    console.log(
      '[*] Node',
      cyan(`<${identity.toNumber().toString()}>`.padEnd(4, ' ')),
      'created:',
      green(`(${params.name}:${NodeLabel.TYPE})`)
    );
    return { id: identity.toNumber(), ...params };
  } catch (err) {
    throw err;
  } finally {
    await session.close();
  }
}
