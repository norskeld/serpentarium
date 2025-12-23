import { foo } from '@serpentarium/foo'

export function bar(): Array<string> {
  return [foo(), 'this is bar!']
}
