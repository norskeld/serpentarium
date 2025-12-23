import { describe, expect, it } from 'vitest'

import { foo, fooScreaming, fooSqueaking } from './index'

describe('foo', () => {
  it('works', () => {
    expect(foo()).toBe('this is foo!')
  })
})

describe('fooScreaming', () => {
  it('works', () => {
    expect(fooScreaming()).toBe('FOO!!!')
  })
})

describe('fooSqueaking', () => {
  it('works', () => {
    expect(fooSqueaking()).toBe(
      'FOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO' +
        'OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO' +
        'OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO',
    )
  })
})
