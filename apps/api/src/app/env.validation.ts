import { plainToInstance } from 'class-transformer';
import { IsNumber, Max, Min, validateSync } from 'class-validator';
import { EnvValidation } from './app.constants';

enum Port {
  MIN = 0,
  MAX = 65535
}

class EnvironmentConfig {
  @IsNumber({},{
    message: EnvValidation.API_PORT_REQUIRED
  })
  @Min(Port.MIN)
  @Max(Port.MAX)
  public PORT: number;
}

export function validateEnvironment(config: Record<string, unknown>) {
  const environmentConfig = plainToInstance(EnvironmentConfig, config, {
    enableImplicitConversion: true,
  });

  const errors = validateSync(environmentConfig, {
    skipMissingProperties: false,
  });

  if (errors.length > 0) {
    throw new Error(errors.toString());
  }

  return environmentConfig;
}
