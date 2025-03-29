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
    if (!db) {
      throw new Error('Firestore is not initialized');
    }
    this.characterSheetsCollection = collection(db, 'characterSheets');
    this.newsletterCollection = collection(db, 'newsletterSubscriptions');
  }

  // Character Sheet Methods
  async createCharacterSheet(sheet: Omit<CharacterSheet, 'id' | 'createdAt' | 'updatedAt'>): Promise<CharacterSheet> {
    if (!db) throw new Error('Firestore is not initialized');
    
    const now = new Date();
    const docRef = await addDoc(this.characterSheetsCollection, {
      ...sheet,
      createdAt: now,
      updatedAt: now,
    });

    return {
      id: docRef.id,
      ...sheet,
      createdAt: now,
      updatedAt: now,
    };
  }

  async getCharacterSheets(userId: string): Promise<CharacterSheet[]> {
    if (!db) throw new Error('Firestore is not initialized');
    
    const q = query(
      this.characterSheetsCollection,
      where('userId', '==', userId),
      orderBy('updatedAt', 'desc')
    );

    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt?.toDate(),
      updatedAt: doc.data().updatedAt?.toDate(),
    })) as CharacterSheet[];
  }

  async getCharacterSheet(id: string): Promise<CharacterSheet | null> {
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
    if (!db) throw new Error('Firestore is not initialized');
    
    const docRef = doc(this.characterSheetsCollection, id);
    await updateDoc(docRef, {
      ...updates,
      updatedAt: new Date(),
    });
  }

  async deleteCharacterSheet(id: string): Promise<void> {
    if (!db) throw new Error('Firestore is not initialized');
    
    const docRef = doc(this.characterSheetsCollection, id);
    await deleteDoc(docRef);
  }

  // Newsletter Methods
  async subscribeToNewsletter(userId: string, email: string): Promise<void> {
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