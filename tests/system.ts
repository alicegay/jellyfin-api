import { test, expectTypeOf } from 'vitest'
import system from '../src/api/system'
import InfoPublic from '../src/types/system/InfoPublic'

test('Info/Public', () => {
  expectTypeOf(
    system().infoPublic('http://192.168.8.8:8096'),
  ).toMatchTypeOf<InfoPublic>()
})
