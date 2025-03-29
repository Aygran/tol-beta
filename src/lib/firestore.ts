import { 
  collection,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  getDocs,
  Timestamp,
  addDoc,
  orderBy,
  limit,
  CollectionReference,
  DocumentReference,
  DocumentData
} from 'firebase/firestore';
import { db } from './firebase';
import { User } from 'firebase/auth';

export interface Ability {
  id: string;
  name: string;
  tier: string;
  ap: string;
  mp: string;
  range: string;
  duration: string;
  damage: string;
  spellPassRating: string;
  description: string;
  upgrades: string;
  isFocus: boolean;
}

export interface Equipment {
  id: string;
  name: string;
  type: string;
  quantity: string;
  weight: string;
  value: string;
  av: string;
  notes: string;
}

export interface CharacterSheet {
  id?: string;
  userId: string;
  characterName: string;
  values: Record<string, string>;
  abilities: Ability[];
  equipment: Equipment[];
  createdAt: Date;
  updatedAt: Date;
}

export interface NewsletterSubscription {
  userId: string;
  email: string;
  subscribedAt: Date;
  isActive: boolean;
}

class FirestoreService {
  private characterSheetsCollection: CollectionReference<DocumentData>;
  private newsletterCollection: CollectionReference<DocumentData>;

  constructor() {
    if (typeof window === 'undefined') {
      // During static export, create dummy collections
      this.characterSheetsCollection = {} as CollectionReference<DocumentData>;
      this.newsletterCollection = {} as CollectionReference<DocumentData>;
      return;
    }

    if (!db) {
      throw new Error('Firestore is not initialized');
    }
    this.characterSheetsCollection = collection(db, 'characterSheets');
    this.newsletterCollection = collection(db, 'newsletterSubscriptions');
  }

  // Character Sheet Methods
  async createCharacterSheet(sheet: Omit<CharacterSheet, 'id' | 'createdAt' | 'updatedAt'>): Promise<CharacterSheet> {
    if (typeof window === 'undefined') {
      // Return dummy data during static export
      return {
        id: 'dummy-id',
        ...sheet,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
    }

    if (!db) throw new Error('Firestore is not initialized');
    
    console.log('Creating character sheet:', sheet);
    const now = new Date();
    try {
      const docRef = await addDoc(this.characterSheetsCollection, {
        ...sheet,
        createdAt: now,
        updatedAt: now,
      });
      console.log('Created character sheet with ID:', docRef.id);

      const newSheet = {
        id: docRef.id,
        ...sheet,
        createdAt: now,
        updatedAt: now,
      };
      console.log('Returning new character sheet:', newSheet);
      return newSheet;
    } catch (error) {
      console.error('Error creating character sheet:', error);
      throw error;
    }
  }

  async getCharacterSheets(userId: string): Promise<CharacterSheet[]> {
    if (typeof window === 'undefined') {
      // Return empty array during static export
      return [];
    }

    if (!db) throw new Error('Firestore is not initialized');
    
    console.log('Fetching character sheets for user:', userId);
    const q = query(
      this.characterSheetsCollection,
      where('userId', '==', userId),
      orderBy('updatedAt', 'desc')
    );

    try {
      const querySnapshot = await getDocs(q);
      console.log('Found character sheets:', querySnapshot.size);
      const sheets = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt?.toDate(),
        updatedAt: doc.data().updatedAt?.toDate(),
      })) as CharacterSheet[];
      console.log('Processed character sheets:', sheets);
      return sheets;
    } catch (error) {
      console.error('Error fetching character sheets:', error);
      throw error;
    }
  }

  async getCharacterSheet(id: string): Promise<CharacterSheet | null> {
    if (typeof window === 'undefined') {
      // Return null during static export
      return null;
    }

    if (!db) throw new Error('Firestore is not initialized');
    
    const docRef = doc(this.characterSheetsCollection, id);
    const docSnap = await getDoc(docRef);
    
    if (!docSnap.exists()) return null;
    
    const data = docSnap.data();
    return {
      id: docSnap.id,
      ...data,
      createdAt: data.createdAt?.toDate(),
      updatedAt: data.updatedAt?.toDate(),
    } as CharacterSheet;
  }

  async updateCharacterSheet(id: string, updates: Partial<CharacterSheet>): Promise<void> {
    if (typeof window === 'undefined') {
      // Do nothing during static export
      return;
    }

    if (!db) throw new Error('Firestore is not initialized');
    
    const docRef = doc(this.characterSheetsCollection, id);
    await updateDoc(docRef, {
      ...updates,
      updatedAt: new Date(),
    });
  }

  async deleteCharacterSheet(id: string): Promise<void> {
    if (typeof window === 'undefined') {
      // Do nothing during static export
      return;
    }

    if (!db) throw new Error('Firestore is not initialized');
    
    const docRef = doc(this.characterSheetsCollection, id);
    await deleteDoc(docRef);
  }

  // Newsletter Methods
  async subscribeToNewsletter(userId: string, email: string): Promise<void> {
    if (typeof window === 'undefined') {
      // Do nothing during static export
      return;
    }

    if (!db) throw new Error('Firestore is not initialized');
    
    const subscription: NewsletterSubscription = {
      userId,
      email,
      subscribedAt: new Date(),
      isActive: true,
    };

    await addDoc(this.newsletterCollection, subscription);
  }

  async getNewsletterSubscription(userId: string): Promise<NewsletterSubscription | null> {
    if (typeof window === 'undefined') {
      // Return null during static export
      return null;
    }

    if (!db) throw new Error('Firestore is not initialized');
    
    const q = query(
      this.newsletterCollection,
      where('userId', '==', userId),
      limit(1)
    );

    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) return null;

    const doc = querySnapshot.docs[0];
    const data = doc.data();
    return {
      userId: data.userId,
      email: data.email,
      subscribedAt: data.subscribedAt?.toDate(),
      isActive: data.isActive,
    };
  }

  async unsubscribeFromNewsletter(userId: string): Promise<void> {
    if (typeof window === 'undefined') {
      // Do nothing during static export
      return;
    }

    if (!db) throw new Error('Firestore is not initialized');
    
    const q = query(
      this.newsletterCollection,
      where('userId', '==', userId),
      limit(1)
    );

    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      const docRef = doc(this.newsletterCollection, querySnapshot.docs[0].id);
      await updateDoc(docRef, { isActive: false });
    }
  }
}

export const firestoreService = new FirestoreService(); 