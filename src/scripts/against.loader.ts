import { cyan, green, grey } from 'colors';
import { Driver, Relationship } from 'neo4j-driver';

import { NodeLabel } from '../shared/constants';
import { IAgainst, ICreateAgainst } from '../shared/types';

export async function loadAgainstData(driver: Driver, data: ICreateAgainst): Promise<IAgainst> {
  const session = driver.session();
  try {
    let statement = '';
    statement += `MATCH (a:${NodeLabel.TYPE} { name: $attackTypeName }), (d:${NodeLabel.TYPE} { name: $defendTypeName })\n`;
    statement += `MERGE (a)-[r:${data.attackStrength}]->(d)\n`;
    statement += `RETURN r`;

    const { records } = await session.run(statement, data);
    const { identity } = records[0].get('r') as Relationship;

    console.log(
      '[*] Relationship',
      cyan(`<${identity.toNumber().toString()}>`.padEnd(4, ' ')),
      'created:',
      grey(`(${data.attackTypeName}:${NodeLabel.TYPE})`),
      green(`-[:${data.attackStrength}]->`),
      grey(`(${data.defendTypeName}:${NodeLabel.TYPE})`)
    );
    return { id: identity.toNumber(), ...data };
  } catch (err) {
    throw err;
  } finally {
    await session.close();
  }
}
