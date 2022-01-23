import { getFirestore } from 'firebase-admin/firestore'
import { initializeApp, getApps, cert } from 'firebase-admin/app'

const apps = getApps()

if (!apps.length) {
    initializeApp({
        credential: cert({
            type: '',
            project_id: '',
            private_key_id: '',
            private_key: '-----BEGIN PRIVATE KEY-----\n...........\n-----END PRIVATE KEY-----\n',
            client_email: '',
            client_id: '',
            auth_uri: '',
            token_uri: '',
            auth_provider_x509_cert_url: '',
            client_x509_cert_url: ''
        })
    })
}

export default async (request, response) => {
    const db = getFirestore()
    const productsSnap = await db.collection('products').get()
    const productsData = productsSnap.docs.map(doc => {
        return {
            uuid: doc.id,
            ...doc.data()
        }
    })
    
    return productsData
}
