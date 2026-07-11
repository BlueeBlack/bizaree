import { create } from "zustand";

type EnquiryState = {
  /** Product preselected in the enquiry form (set by product row clicks). */
  product: string;
  note: string;
  setProduct: (product: string) => void;
  setNote: (note: string) => void;
};

export const useEnquiryStore = create<EnquiryState>((set) => ({
  product: "1 Litre Bottle",
  note: "",
  setProduct: (product) =>
    set({ product, note: `Enquiring about: ${product}` }),
  setNote: (note) => set({ note }),
}));
