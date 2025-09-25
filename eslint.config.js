import { nextConfig } from '@meridian/config/eslint/nextjs';

/** @type {import("eslint").Linter.Config} */
export default [
  ...nextConfig,
  { files: ['next-env.d.ts'], rules: { '@typescript-eslint/triple-slash-reference': 'off' } },
  {
    files: ['next.config.ts'],
    rules: { '@typescript-eslint/no-unsafe-type-assertion': 'off', 'import/no-default-export': 'off' },
  },
];
