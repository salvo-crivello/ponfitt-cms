"use client"

import { useSyncExternalStore } from "react"

import type { TWeekdayId } from "@/types/lunch.types"
import { getWeekdayInRome } from "@/utils"

const subscribe = () => () => {}

/**
 * Today's weekday in Italy, or `null` on the server and during hydration
 * (so the first client render matches the server HTML).
 */
export function useWeekday(): TWeekdayId | null {
  return useSyncExternalStore(
    subscribe,
    () => getWeekdayInRome(),
    () => null
  )
}
