import create from 'zustand'

const useInvoiceItemsStore = create((set) => ({
  items: [],
  addItems: (item) => set((state) => ({ items: [...state.items,item] })),
  removeItems: (id) => set((state) =>({ items: state.items.filter(item=>item.id!=id)})),
}))

export default useInvoiceItemsStore
