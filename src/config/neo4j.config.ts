export class Neo4jConfig {
  public readonly host: string;
  public readonly password: string;
  public readonly user: string;

  constructor() {
    const { NEO4J_HOST_NAME, NEO4J_PASSWORD, NEO4J_PORT_BOLT, NEO4J_USER } = process.env;

    let hostName;
    if (typeof NEO4J_HOST_NAME !== 'string' || NEO4J_HOST_NAME === '') {
      hostName = 'localhost';
      console.warn(`[!] WARNING: No NEO4J_HOST_NAME provided, defaulting to ${hostName}`);
    } else {
      hostName = NEO4J_HOST_NAME;
    }

    let hostPort;
    if (typeof NEO4J_PORT_BOLT !== 'string' || NEO4J_PORT_BOLT === '') {
      hostPort = 7687;
      console.warn(`[!] WARNING: No NEO4J_PORT_BOLT provided, defaulting to ${hostPort}`);
    } else {
      hostPort = parseInt(NEO4J_PORT_BOLT);
      if (isNaN(hostPort)) {
        throw new TypeError('config failed: NEO4J_PORT_BOLT is invalid');
      }
    }

    this.host = `neo4j://${hostName}:${hostPort}`;

    if (typeof NEO4J_PASSWORD !== 'string' || NEO4J_PASSWORD === '') {
      throw new TypeError('config failed: NEO4J_PASSWORD is invalid');
    }
    this.password = NEO4J_PASSWORD;

    if (typeof NEO4J_USER !== 'string' || NEO4J_USER === '') {
      throw new TypeError('config failed: NEO4J_USER is invalid');
    }
    this.user = NEO4J_USER;
  }
}
