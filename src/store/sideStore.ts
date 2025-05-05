import { create } from 'zustand'

import { SideValue } from '@/types/global'

type SideSatae = {
    value: SideValue,
    setValue: (value: SideValue) => void
}

const useSideStore = create<SideSatae>((set) => ({
    value: 'latest',
    setValue: (value) => set({ value })
}))

export default useSideStore

