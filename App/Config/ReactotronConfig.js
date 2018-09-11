import Config from './DebugConfig'
import Reactotron from 'reactotron-react-native'
import { reactotronRedux as reduxPlugin } from 'reactotron-redux'
import sagaPlugin from 'reactotron-redux-saga'

if (Config.useReactotron) {
  Reactotron.configure({
    name: 'React Native Demo',
  })
    .useReactNative({
      networking: {
        // optionally, you can turn it off with false.
        ignoreUrls: /symbolicate/,
      },
      errors: { veto: stackFrame => false }, // or turn it off with false
    })
    .use(reduxPlugin())
    .use(sagaPlugin())
    .connect()

  Reactotron.clear()
  console.tron = Reactotron
}
