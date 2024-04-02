import {create} from 'zustand';

export interface ProfileState {
  // Properties
  name: string;
  email: string;

  // Methods
  changeProfile: (name: string, email: string) => void;
}

export const useProfileStore = create<ProfileState>()((set, get) => ({
  // Properties
  name: 'John Doe',
  email: 'john.doe@google.com',

  // Methods
  changeProfile: (name: string, email: string) => {
    console.log(get());
    set({
      name,
      email,
    });
  },
}));
