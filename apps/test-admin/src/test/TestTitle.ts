import { Test as TTest } from "../api/test/Test";

export const TEST_TITLE_FIELD = "customer";

export const TestTitle = (record: TTest): string => {
  return record.customer || String(record.id);
};
