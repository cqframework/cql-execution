import { describe, it, expect, beforeEach, vi, MockInstance } from 'vitest';
import { translate } from '@src/translate/translate';
import * as translationModule from '@src/translate/translation-module';
import * as translationService from '@src/translate/translation-service';

describe('translate', () => {
  // mock out the underlying translation modules, as they'll be tested independently
  let moduleSpy: MockInstance<typeof translationModule.translateLibrary>;
  let serviceSpy: MockInstance<typeof translationService.translateLibrary>;

  beforeEach(() => {
    moduleSpy = vi.spyOn(translationModule, 'translateLibrary').mockResolvedValue({
      mocked: true,
      library: { identifier: { id: 'TestCQL', version: '1.0.0' } }
    });

    serviceSpy = vi.spyOn(translationService, 'translateLibrary').mockResolvedValue({
      mocked: true,
      library: { identifier: { id: 'TestCQL', version: '1.0.0' } }
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('uses the local translation module by default and returns correct identifier', async () => {
    const elm = await translate('1 + 2');

    expect(moduleSpy).toHaveBeenCalledTimes(1);
    const passedCQL = moduleSpy.mock.calls[0]?.[0];
    expect(passedCQL).toContain("library TestCQL version '1.0.0'");
    expect(passedCQL).toContain('context Unfiltered');
    expect(passedCQL).toContain('define expression: 1 + 2');
    expect(elm).toEqual({
      mocked: true,
      library: { identifier: { id: 'TestCQL', version: '1.0.0' } }
    });
  });

  it('uses the translation service when flag is true', async () => {
    const elm = await translate('1 + 2', true);

    expect(serviceSpy).toHaveBeenCalledTimes(1);
    const passedCQL = serviceSpy.mock.calls[0]?.[0];
    expect(passedCQL).toContain("library TestCQL version '1.0.0'");
    expect(passedCQL).toContain('context Unfiltered');
    expect(passedCQL).toContain('define expression: 1 + 2');
    expect(elm).toEqual({
      mocked: true,
      library: { identifier: { id: 'TestCQL', version: '1.0.0' } }
    });
  });
});
