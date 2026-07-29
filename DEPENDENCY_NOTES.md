The following notes about the app's dependencies should be revisited and resolved when possible:

As of 2026-07-27:

- `@types/node`: Consider updating to `26.x` in the future, but for now `24.x` still has plent of time in LTS.
- `typescript`: `7.x` uses a new native compiler without a native API. Consider updating soon after evaluating the impact.
- `tslog` (test-server only): `5.x` is ESM-only and replaces v4's flat logger settings such as `hideLogPositionForProduction` and `prettyLogTemplate`. Updating will require some migration.
