import { getFirestore } from 'firebase-admin/firestore'

export default async (req, res) => {
    const db = getFirestore()
    const productsSnap = await db.collection('products').get()
    const productsData = productsSnap.docs.map(doc => doc.data())
    
    return productsData
}