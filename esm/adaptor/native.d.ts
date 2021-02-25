import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
export default function adaptor(): Promise<{
    firestore: FirebaseFirestoreTypes.Module;
    consts: {
        DocumentReference: FirebaseFirestoreTypes.DocumentReference<FirebaseFirestoreTypes.DocumentData>;
        Timestamp: typeof FirebaseFirestoreTypes.Timestamp;
        FieldValue: typeof FirebaseFirestoreTypes.FieldValue;
        FieldPath: typeof FirebaseFirestoreTypes.FieldPath;
    };
}>;
export declare function injectAdaptor(): void;
