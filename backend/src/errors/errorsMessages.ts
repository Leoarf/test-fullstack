import { ErrorCode } from './errorCodes';

export const errorMessages: Record<ErrorCode, string> = {
  [ErrorCode.INTERNAL_SERVER_ERROR]: 'Internal server error',
  [ErrorCode.USER_NOT_FOUND_ERROR]: 'User not found',
  [ErrorCode.VALIDATION_FAILED_ERROR]: 'Validation failed',
};
