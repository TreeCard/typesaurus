'use strict'
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value)
          })
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value))
        } catch (e) {
          reject(e)
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value))
        } catch (e) {
          reject(e)
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected)
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next())
    })
  }
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod
    var result = {}
    if (mod != null)
      for (var k in mod)
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k]
    result['default'] = mod
    return result
  }
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
const firestore_1 = __importStar(require('@react-native-firebase/firestore'))
// @ts-ignore: React Native Firebase doesn't export types for internal modules
const FirestoreDocumentReference_1 = __importDefault(
  require('@react-native-firebase/firestore/lib/FirestoreDocumentReference')
)
const utils_1 = require('./utils')
const DocumentReference = FirestoreDocumentReference_1.default
function adaptor() {
  return __awaiter(this, void 0, void 0, function* () {
    const firestore = firestore_1.default()
    // At the moment, the React Native Firebase adaptor doesn't support getAll.
    if (!('getAll' in firestore))
      Object.assign(firestore, { getAll: utils_1.getAll })
    return {
      firestore,
      consts: {
        DocumentReference,
        Timestamp: firestore_1.firebase.firestore.Timestamp,
        FieldValue: firestore_1.firebase.firestore.FieldValue,
        FieldPath: firestore_1.firebase.firestore.FieldPath
      }
    }
  })
}
exports.default = adaptor
function injectAdaptor() {
  throw new Error(
    'Injecting adaptor is not supported in the native environment'
  )
}
exports.injectAdaptor = injectAdaptor
//# sourceMappingURL=native.js.map
