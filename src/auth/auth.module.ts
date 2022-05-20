import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmExModule } from '../database/typeorm-ex.module';
import { UserRepository } from './users.repository';

@Module({
  imports: [TypeOrmExModule.forCustomRepository([UserRepository])],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
