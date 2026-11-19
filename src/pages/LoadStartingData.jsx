import { useState } from 'react'
import { doc, getDoc, collection, writeBatch } from 'firebase/firestore'
import { db } from '../services/firebase'
import { lists, accounts, debtors, investments, sources } from '../data/seedData'

// A ONE-TIME page: copies seedData.js into Firestore.
// We'll delete this page once the data is loaded.
function LoadStartingData() {
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleLoad() {
    setLoading(true)
    setMessage('')
    try {
      // 1. Safety check: if the lists are already there, stop.
      //    This way clicking twice never creates duplicates.
      const listsDoc = await getDoc(doc(db, 'lists', 'main'))
      if (listsDoc.exists()) {
        setMessage('Starting data is already loaded. Nothing to do.')
        setLoading(false)
        return
      }

      // 2. A "batch" saves many documents together.
      //    Either ALL of them are saved, or NONE (if something fails).
      const batch = writeBatch(db)
      let count = 0

      // The dropdown lists (employees, banks, departments...) go in ONE document
      batch.set(doc(db, 'lists', 'main'), lists)
      count++

      // Balance Summary → one document per owner + bank
      for (const owner in accounts) {
        for (const bank of accounts[owner]) {
          // doc(collection(...)) = a new document with an auto-generated ID
          batch.set(doc(collection(db, 'accounts')), {
            owner,
            bank,
            accountNo: '',
            openingBalance: 0,
            payments: 0,
            receipts: 0,
            closingBalance: 0,
          })
          count++
        }
      }

      // Debtors → one document per borrower + lender
      for (const fromName in debtors) {
        for (const toName of debtors[fromName]) {
          batch.set(doc(collection(db, 'debtors')), {
            fromName,
            toName,
            openingBalance: 0,
            monthlyRepayments: 0,
            monthlyBorrowed: 0,
            closingBalance: 0,
          })
          count++
        }
      }

      // Investment → one document per investor + instrument
      for (const name in investments) {
        for (const instrument of investments[name]) {
          batch.set(doc(collection(db, 'investments')), {
            name,
            instrument,
            amountInvested: 0,
          })
          count++
        }
      }

      // Source → one document per row
      for (const s of sources) {
        batch.set(doc(collection(db, 'sources')), {
          name: s.name,
          from: s.from,
          purpose: s.purpose,
          receivables: 0,
          amountReceived: 0,
        })
        count++
      }

      // 3. Send everything to Firestore
      await batch.commit()
      setMessage(`Done! Saved ${count} documents.`)
    } catch (err) {
      setMessage('Error: ' + err.message)
    }
    setLoading(false)
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-md max-w-md">
      <h2 className="text-lg font-bold mb-2">Load starting data</h2>
      <p className="text-sm text-gray-500 mb-4">
        Copies names, banks and accounts from the sheet into Firestore. Run once.
      </p>
      <button
        onClick={handleLoad}
        disabled={loading}
        className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 disabled:opacity-50"
      >
        {loading ? 'Loading...' : 'Load starting data'}
      </button>
      {message && <p className="mt-4 text-sm">{message}</p>}
    </div>
  )
}

export default LoadStartingData