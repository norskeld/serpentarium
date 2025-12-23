import { describe, expect, it } from 'vitest'

import { bar } from './index'

describe('bar', () => {
  it('works', () => {
    expect(bar()).toStrictEqual(['this is foo!', 'this is bar!'])
  })
})
