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
  Timestamp
} from 'firebase/firestore';
import { db } from './firebase';
import { User } from 'firebase/auth';

export interface Ability {
  name: string;
  tier: string;
  ap: string;
  mp: string;
  range: string;
  duration: string;
  damage: string;
  spellPassRating: string;
  focus: boolean;
  description: string;
  upgrades: string;
}

export interface Equipment {
  name: string;
  type: string;
  quantity: string;
  weight: string;
  value: string;
  av: string;
  notes: string;
}

export interface CharacterSheet {
  id: string;
  userId: string;
  name: string;
  values: { [key: string]: string };
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
  private characterSheetsCollection = collection(db, 'characterSheets');
  private newsletterCollection = collection(db, 'newsletterSubscriptions');

  // Character Sheet Methods
  async createCharacterSheet(userId: string, data: Omit<CharacterSheet, 'id' | 'userId' | 'createdAt' | 'updatedAt'>): Promise<CharacterSheet> {
    const docRef = doc(this.characterSheetsCollection);
    const now = new Date();
    const characterSheet: CharacterSheet = {
      id: docRef.id,
      userId,
      ...data,
      createdAt: now,
      updatedAt: now,
    };

    await setDoc(docRef, {
      ...characterSheet,
      createdAt: Timestamp.fromDate(now),
      updatedAt: Timestamp.fromDate(now),
    });

    return characterSheet;
  }

  async getCharacterSheet(id: string): Promise<CharacterSheet | null> {
    const docRef = doc(this.characterSheetsCollection, id);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      return null;
    }

    const data = docSnap.data();
    return {
      id: docSnap.id,
      ...data,
      createdAt: (data.createdAt as Timestamp).toDate(),
      updatedAt: (data.updatedAt as Timestamp).toDate(),
    } as CharacterSheet;
  }

  async getUserCharacterSheets(userId: string): Promise<CharacterSheet[]> {
    const q = query(this.characterSheetsCollection, where('userId', '==', userId));
    const querySnapshot = await getDocs(q);

    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
      createdAt: (doc.data().createdAt as Timestamp).toDate(),
      updatedAt: (doc.data().updatedAt as Timestamp).toDate(),
    })) as CharacterSheet[];
  }

  async updateCharacterSheet(id: string, data: Partial<CharacterSheet>): Promise<void> {
    const docRef = doc(this.characterSheetsCollection, id);
    await updateDoc(docRef, {
      ...data,
      updatedAt: Timestamp.fromDate(new Date()),
    });
  }

  async deleteCharacterSheet(id: string): Promise<void> {
    const docRef = doc(this.characterSheetsCollection, id);
    await deleteDoc(docRef);
  }

  // Newsletter Subscription Methods
  async subscribeToNewsletter(userId: string, email: string): Promise<void> {
    const docRef = doc(this.newsletterCollection, userId);
    const subscription = {
      userId,
      email,
      subscribedAt: new Date(),
      isActive: true,
    };

    await setDoc(docRef, {
      ...subscription,
      subscribedAt: Timestamp.fromDate(subscription.subscribedAt),
    });
  }

  async unsubscribeFromNewsletter(userId: string): Promise<void> {
    const docRef = doc(this.newsletterCollection, userId);
    await updateDoc(docRef, {
      isActive: false,
    });
  }

  async getNewsletterSubscription(userId: string): Promise<{ userId: string; email: string; subscribedAt: Date; isActive: boolean; } | null> {
    const docRef = doc(this.newsletterCollection, userId);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      return null;
    }

    const data = docSnap.data();
    return {
      userId: data.userId,
      email: data.email,
      subscribedAt: (data.subscribedAt as Timestamp).toDate(),
      isActive: data.isActive,
    };
  }
}

export const firestoreService = new FirestoreService(); 