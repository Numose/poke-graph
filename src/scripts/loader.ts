import { green, red } from 'colors';
import { auth, Driver, driver as neo4jDriver } from 'neo4j-driver';

import { loadAgainstData } from './against.loader';
import { loadTypeData } from './type.loader';
import { typeData } from '../data/type.data';
import { Neo4jConfig } from '../config/neo4j.config';
import { NodeLabel } from '../shared/constants';
import { ICreateAgainst } from '../shared/types';

export async function applyConstraints(driver: Driver): Promise<void> {
  const session = driver.session();
  try {
    // -- Type
    await session.run(`CREATE CONSTRAINT ON (t:${NodeLabel.TYPE}) ASSERT t.name IS UNIQUE`);

    console.log('[*] Constraints applied');
  } catch (error) {
    throw error;
  } finally {
    await session.close();
  }
}

export async function loadData(): Promise<void> {
  const neo4jConfig = new Neo4jConfig();
  const driver = neo4jDriver(neo4jConfig.host, auth.basic(neo4jConfig.user, neo4jConfig.password));
  try {
    /**
     * IMPORTANT load order matters
     */
    // -- apply constraints
    // await applyConstraints(driver);
    // -- load Type data
    await Promise.all(typeData.map(async data => loadTypeData(driver, data)));
    // -- load AGAINST data
    const againstData: ICreateAgainst[] = typeData.flatMap(data =>
      data.versus.map(item => ({ attackTypeName: data.name, attackStrength: item.strength, defendTypeName: item.name }))
    );
    await Promise.all(againstData.map(data => loadAgainstData(driver, data)));
  } catch (err) {
    throw err;
  } finally {
    await driver.close();
  }
}

if (typeof require.main !== 'undefined') {
  loadData()
    .then(() => {
      console.log(green('------------------------------------------------------------'));
      console.log(green('[*] Load complete'));
      console.log(green('------------------------------------------------------------'));
      process.exit();
    })
    .catch(err => {
      console.log(red('------------------------------------------------------------'));
      console.log(red('[!] Load failed'));
      console.log(red('------------------------------------------------------------'));
      console.error(err);
      process.exit();
    });
}
